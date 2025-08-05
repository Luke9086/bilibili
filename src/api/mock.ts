import { faker } from '@faker-js/faker';

export interface Video {
    key:string;
    text:string;
    name:string;
    image:string;
}

export async function getVideoList(page:number=0,pageSize:number=20):Promise<Video[]> {
    const data:Video[] = Array.from({length:pageSize},(_,i)=>({
        key:(page + i).toString(),
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