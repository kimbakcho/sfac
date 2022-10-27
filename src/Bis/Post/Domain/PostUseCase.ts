import type {PostReqDto} from "@/Bis/Post/Dto/PostReqDto";
import type {PostResDto} from "@/Bis/Post/Dto/PostResDto";
import axios from "axios";
import type {PageWrap} from "@/Bis/Util/Dto/PageWrap";

export default  class PostUseCase {

    private static instance: PostUseCase;

    private constructor() {
    }

    public static getInstance(): PostUseCase {
        if (!PostUseCase.instance) {
            PostUseCase.instance = new PostUseCase();
        }

        return PostUseCase.instance;
    }

    async postWrite(reqDto: PostReqDto): Promise<PostResDto> {
        const formData = new FormData();
        formData.append("title",reqDto.title);
        formData.append("category1",reqDto.category1);
        formData.append("bodyContent",reqDto.bodyContent);
        if(reqDto.mainImageUrl){
            formData.append("mainImageUrl",reqDto.mainImageUrl);
        }
        const axiosResponse = await axios.post("/post/createPost/",formData)
        return axiosResponse.data
    }

    async getPost(id: number): Promise<PostResDto> {
        const { data }  = await axios.get(`/post/post/${id}/`)
        return data
    }

    async getPosts(page: number): Promise<PageWrap<PostResDto>> {
        const { data } = await axios.get("/post/posts/",{
            params: {
                page: page
            }
        })
        return data;
    }

}
