import { defineStore } from 'pinia'
import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";
import type {PageWrap} from "@/Bis/Util/Dto/PageWrap";
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";


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

export const communityStore = defineStore({
  id: "communityStore",
  state: () => ({
    pageResult: {
      results: [],
      next: null,
      previous: null,
      count: 0
    } as PageWrap<PostResDto>,
    currentPageNumber: 1
  })
})
