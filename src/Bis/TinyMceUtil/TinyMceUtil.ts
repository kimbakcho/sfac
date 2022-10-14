import FireStorageUseCase from "@/Bis/FireStore/FireStorageUseCase";

const imageUpload = (blobInfo: any, progress: any) =>
    new Promise(async (resolve, reject) => {
        console.log("image")

        const fireStorageUseCase = FireStorageUseCase.getInstance();
        try{
            const url = await fireStorageUseCase.uploadPostImage(blobInfo.base64())
            resolve(url);
        }catch (e) {
            reject(e)
        }
    })
export {imageUpload}
