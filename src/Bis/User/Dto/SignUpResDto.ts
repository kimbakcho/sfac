import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";

export interface SignUpResDto {
    userInfo: UserInfoResDto,
    access: string;
    refresh: string;
}
