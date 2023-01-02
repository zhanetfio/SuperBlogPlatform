import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://blogs-black.vercel.app/',
    withCredentials: true
})

export const postsAPI={
    getPosts(){
        return instance.get<ResponsePostsType>('posts')
    }

}


//types

export type PostType={
    id:string
    title:string
    shortDescription:string
    content:string
    blogId:string
    blogName:string
    createdAt:string
}

export type ResponsePostsType={
    pagesCount:number
    page: number
    pageSize: number
    totalCount:number
    items:  PostType[]
}