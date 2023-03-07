import React, {useEffect} from "react";
import style from './Blog.module.css';
import {NavLink, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";
import {getBlogTC} from "../blog-reducer";
import {BlogInfo} from "./blogInfo/BlogInfo";

export const Blog = () => {
    const dispatch = useAppDispatch()
    const {id} = useParams()
    const blog = useAppSelector(state=>state.blogs.items[0])

    useEffect(() => {
        if (id) {
            dispatch(getBlogTC(id))
        }
    },[dispatch])

    return (
        <div className={style.blogWrapper}>
            <div>

            </div>
            <div>
                <NavLink to={'/blogs'} style={{textDecoration:'none', display:'flex'}}>🠔 Back to blogs</NavLink>
            </div>
            <div>
                <BlogInfo name={blog.name} description={blog.description} createdAt={blog.createdAt} websiteUrl={blog.websiteUrl}/>
            </div>


        </div>
    )
}