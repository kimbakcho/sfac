import type {UserInfoResDto} from "@/Bis/User/Dto/UserInfoResDto";

export interface PostReplyResDto {
    uuid: string,
    user: UserInfoResDto,
    replyContent: string,
    subReplyCount: number,
    writeTime: string,
    subReply?: PostReplyResDto[]
    subReplyOpen: boolean
}
