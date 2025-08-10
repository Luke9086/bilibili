import { faker } from '@faker-js/faker';
import {v4 as uuidv4} from 'uuid';
export interface Video {
    key:string;
    text:string;
    name:string;
    image:string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getVideoList(page:number=0,pageSize:number=20):Promise<Video[]> {
    const data:Video[] = Array.from({length:pageSize},()=>({
        key:uuidv4(),
        text:faker.lorem.paragraph(1),
        name:faker.internet.displayName(),
        image:faker.image.urlPicsumPhotos({
            width:640,
            height:480,
            grayscale:false,
        }),
    }))
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(data)
        },500)
    })
}