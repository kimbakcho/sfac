import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";


export interface PostResDto {
    mainImgUrl?: string;
    title: string;
    bodyContent: string;
    writeDate: string;
    replyCount: number;
    viewCount: number;
    likeCount: number;
    writeUser: UserInfoResDto
}
