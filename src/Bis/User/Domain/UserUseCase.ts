import type {SignUpReqDto} from "@/Bis/User/Dto/SignUpReqDto";
import axios from "axios";
import type {SignUpResDto} from "@/Bis/User/Dto/SignUpResDto";
import {userStore} from "@/stores/store";
import {
    Dialog, Loading
} from 'quasar'
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";
import type {UserInfoReqDto} from "@/Bis/User/Dto/UserInfoReqDto";
import type {SnsLoginReqDto} from "@/Bis/User/Dto/SnsLoginReqDto";
import {v4 as uuidv4} from "uuid";

export default class UserUseCase {
    private static instance: UserUseCase;

    private constructor() {
    }

    public static getInstance(): UserUseCase {
        if (!UserUseCase.instance) {
            UserUseCase.instance = new UserUseCase();
        }

        return UserUseCase.instance;
    }

    async signUp(reqDto: SignUpReqDto): Promise<SignUpResDto> {
        let form = new FormData();
        form.append("nickName", reqDto.nickName)
        form.append("email", reqDto.email)
        form.append("pw", reqDto.pw)
        form.append("profileImage", reqDto.profileImage)
        let axiosResponse = await axios.post<SignUpResDto>("/user/SFACsignUp/", form);
        return axiosResponse.data
    }
    async getUserInfo(): Promise<UserInfoResDto>{
        let axiosResponse = await axios.get("/user/info/");
        return axiosResponse.data
    }

    async userInfoUpdate(userInfoReqDto: UserInfoReqDto): Promise<UserInfoResDto> {
        let axiosResponse = await axios.post('/user/info/',userInfoReqDto);
        return axiosResponse.data
    }

    setToken(access: string, refresh: string) {
        localStorage.setItem("access", access)
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access")}`;
        localStorage.setItem("refresh", refresh)
    }

    async changeUserPw(currentPw: string,newPw: string): Promise<boolean>{
        try{
            Loading.show({
                message: "변경 하는 중"
            })
            const formData = new FormData();
            formData.append("currentPw",currentPw);
            formData.append("newPw",newPw);
            await axios.post("/user/pwChange/",formData)
            Loading.hide()
            Dialog.create({
                message: "Pw 변경을 완료 하였습니다."
            })
            return true;
        }catch (e: any) {
            Loading.hide()
            Dialog.create({
                message: e.response.data.errorMessage
            })
            return false;
        }

    }

    async login(id: string,pw: string): Promise<boolean>{
        try{
            Loading.show({
                message: "로그인 중"
            })
            let userStore1 = userStore();
            const formData = new FormData();
            formData.append("username",id);
            formData.append("password",pw);
            const axiosResponse = await axios.post<{access: string,refresh: string}>("/api/token/",formData,{
                headers: {
                    "Content-Type": "application/json"
                }
            });

            let data = axiosResponse.data;
            this.setToken(data.access,data.refresh)
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access")}`;
            let userUseCase = UserUseCase.getInstance();
            let userInfoResDto = await userUseCase.getUserInfo();
            userStore1.setUserInfo(userInfoResDto)
            userStore1.setIsLogin(true)
            this.refreshTokenSchStart()
            return true;
        }catch (e: any) {
            Dialog.create({
                message: e.response.data.errorMessage
            })
            return false;
        } finally {
            Loading.hide()
        }
        return false;
    }

    logout(){
        let userStore1 = userStore();
        if(userStore1.reFreshTokenSchId != null) {
            clearInterval(userStore1.reFreshTokenSchId)
            userStore1.reFreshTokenSchId = null
        }
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        userStore1.setUserInfo(null)
        userStore1.setIsLogin(false)
        axios.defaults.headers.common['Authorization'] = ''
    }

    goGoogleLogin() {
        location.href="https://accounts.google.com/o/oauth2/v2/auth?scope=openid email"+
            "&access_type=online"+
            "&include_granted_scopes=false"+
            "&response_type=code"+
            `&state=google_${uuidv4()}` +
            `&redirect_uri=${import.meta.env.VITE_RE_DIRECT_URL}`+
            "&client_id=747613190612-2dsp9ppj48grcca77kflliilbe9eimtr.apps.googleusercontent.com"
    }

    async googleLogin(reqDto: SnsLoginReqDto): Promise<SignUpResDto>{
        const formData = new FormData();
        formData.append("code",reqDto.code)
        formData.append("redirect_uri",reqDto.redirect_uri)
        formData.append("state",reqDto.state)
        const signResDto = await axios.post<SignUpResDto>("/user/GoogleSignIn/",formData)
        return signResDto.data
    }

    async verifyToken(token: string) {
        const formData = new FormData();
        formData.append("token", token)
        try {
            const axiosResponse = await axios.post("/api/token/verify/", formData);
            if (axiosResponse.status == 200) {
                return true;
            }

        } catch (e: any) {
            Dialog.create({
                message: e.response.data.detail
            })
            return false;
        }
        return false;
    }

    async getTokenFromRefreshToken(token: string): Promise<{ access: string, refresh: string }> {
        let formData = new FormData();
        formData.append("refresh", token);
        let axiosResponse = await axios.post("/api/token/refresh/", formData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return axiosResponse.data
    }

    refreshTokenSchStart() {
        let userStore1 = userStore();
        if (userStore1.reFreshTokenSchId != null) {
            clearInterval(userStore1.reFreshTokenSchId)
        }
        const refresh = localStorage.getItem("refresh")
        if (refresh) {
            userStore1.reFreshTokenSchId = setInterval(async () => {
                try {
                    const resultToken = await this.getTokenFromRefreshToken(refresh)
                    localStorage.setItem("access", resultToken.access)
                    localStorage.setItem("refresh", resultToken.refresh)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("access")}`;
                } catch (e) {
                    Dialog.create({
                        message: "refreshToken 에 문제가 있습니다."
                    })
                }
            }, 4 * 60 * 1000)

        }
    }

    async findPwReq(email: string): Promise<boolean>{
        const form = new FormData();
        form.append("email",email)
        try{
            Loading.show({
                message: "처리중 입니다."
            })
            await axios.post("/user/pwFind/",form);
            Loading.hide();
            return true;
        }catch (e) {
            Loading.hide();
            Dialog.create({
                message: "변경 메일 송신에 실패 하였습니다."
            })
            return false;
        }
    }

    async findPwChangeReq(token: string,pw: string): Promise<boolean>{
        let form = new FormData()
        form.append("token",token)
        form.append("pw",pw);
        try{
            Loading.show({
                message: "변견중 입니다."
            })
            await axios.post("/user/findPwChangeReq/",form)
            Loading.hide();
            return  true;
        }catch (e) {
            Loading.hide();
            Dialog.create({
                message: "PW 변경에 문제가 있습니다."
            })
            return false
        }

    }
}
