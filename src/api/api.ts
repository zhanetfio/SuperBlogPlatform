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

export const blogsAPI={
    getBlogs(){
        return instance.get<ResponseBlogsType>('blogs')
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
export type ResponseBlogsType={
    pagesCount:number
    page:number
    pageSize: number
    totalCount:number
    items: BlogType[]
}
export type BlogType={
    id:string
    name:string
    websiteUrl:string
    description:string
    createdAt:string
}