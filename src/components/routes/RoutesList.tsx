import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Blogs} from "../blogs/Blogs";
import {Posts} from "../posts/Posts";
import {Page404} from "../../common/Page404";
import {Blog} from "../blogs/blog/Blog";
import {useAppSelector} from "../../common/hooks/hooks";
import {Post} from "../posts/post/Post";

type RoutePropsType={
    blogId:string
    websiteUrl:string
    name:string
    description:string
    createdAt:string
}

/*export enum Path{
    Blogs='/blogs',
    Blog='/blogs/:id',
    Posts='/posts',
    Post='/posts/:id',
    Page404='/error404',
}*/

export const RoutesList = (props:RoutePropsType) => {

    return (
        <div>
           {/* <Routes>
                <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
                <Route path={'/blogs'} element={<Blogs/>}/>
                <Route path={`/blogs/:id`} element={<Blog id={props.blogId} name={props.name} description={props.description} websiteUrl={props.websiteUrl} createdAt={props.createdAt} />}/>
                <Route path={'/posts'} element={<Posts/>}/>
                 <Route path={'/posts/:id'} element={<Post  />}/>

                <Route path={'/error404'} element={<Page404/>}/>
                <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
            </Routes>*/}
        </div>
    );
};

