export interface UserInfoResDto {
    profileImgUrl: string,
    nickName: string,
    user: {
        id: number,
        email: string
    }
}
