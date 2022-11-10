import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";


export interface PostResDto {
    id: number;
    mainImageUrl?: string;
    title: string;
    bodyContent: string;
    writeDate: string;
    category1: string;
    replyCount: number;
    viewCount: number;
    likeCount: number;
    writeUser: UserInfoResDto
}
