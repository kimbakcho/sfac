import {connectStorageEmulator, getDownloadURL, getStorage, ref as fRef, uploadString,uploadBytes} from "firebase/storage";
import {getApp} from "firebase/app";
import {v4 as uuidv4} from "uuid";
import type {UploadResult} from "@firebase/storage";

export default class FireStorageUseCase {
    private static instance: FireStorageUseCase;


    private constructor() {
    }
    private static storage = getStorage();
    public static getInstance(): FireStorageUseCase {
        if (!FireStorageUseCase.instance) {
            FireStorageUseCase.instance = new FireStorageUseCase();
        }

        if(import.meta.env.MODE == 'development'){
            connectStorageEmulator(this.storage, "localhost", 9199);
        }else {
            const firebaseApp = getApp();
            this.storage = getStorage(firebaseApp, "gs://sfac-81ca6.appspot.com/");
        }

        return FireStorageUseCase.instance;

    }


    async uploadUserProfileImage(data: string| File): Promise<string> {
        const storageRef = fRef(FireStorageUseCase.storage, `/profileImage/${uuidv4()}.svg`);
        let result: UploadResult | null = null
        if(typeof data == 'string') {
            result = await uploadString(storageRef,data,'data_url')
        }else if (data instanceof File) {
            result = await uploadBytes(storageRef,data)
        }
        return await getDownloadURL(result!.ref)
    }

    async uploadPostImage(data: string| File): Promise<string>{
        const storageRef = fRef(FireStorageUseCase.storage, `/postImg/${uuidv4()}.png`);
        let result: UploadResult | null = null
        if(typeof data == 'string') {
            result = await uploadString(storageRef,data,'base64')
        }else if(data instanceof File) {
            result = await uploadBytes(storageRef,data)
        }
        return await getDownloadURL(result!.ref)
    }
}
