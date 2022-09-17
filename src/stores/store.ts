import { defineStore } from 'pinia'
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";


export const userStore = defineStore({
  id: 'User',
  state: () => ({
    userInfo: null as UserInfoResDto | null,
    isLogin: false,
    reFreshTokenSchId: null as NodeJS.Timer| null
  }),

  getters: {

  },
  actions: {
    setIsLogin(value: boolean){
      this.isLogin = value;
    },
    setUserInfo(resDto: UserInfoResDto | null) {
      this.userInfo = resDto
    }
  }
})
