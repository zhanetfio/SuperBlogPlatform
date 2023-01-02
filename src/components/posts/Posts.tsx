import React, {useEffect} from 'react';
import {Sorter} from "../blogs/Blogs";
import {PostInfo} from "./postInfo/PostInfo";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getPostsTC} from "./post-reducer";
import style from './Posts.module.css'

export const Posts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.blogs.items)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div className={style.postWrapper}>
            <div className={style.pageTitle}>Posts</div>
            <Sorter/>
            <div className={style.postBlock}>
                {posts?.map((p) => {
                    return (
                        <PostInfo key={p.id}
                                  title={p.name}
                                  description={p.description}
                                  createdAt={p.createdAt}/>
                    )
                })}
            </div>
            <button className={style.button}>Show more</button>
        </div>
    );
};

