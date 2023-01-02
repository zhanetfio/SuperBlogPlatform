import React, {useEffect} from 'react';
import { Sorter} from "../blogs/Blogs";
import {PostInfo} from "./postInfo/PostInfo";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getPostsTC} from "./post-reducer";

export const Posts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.items)

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])

    return (
        <div>
            <div>Posts</div>
            <Sorter/>
            {posts?.map((p) => {
                return (
                    <PostInfo key={p.id}
                              title={p.title}
                              description={p.shortDescription}/>
                )
            })}
            <button>Show more</button>
        </div>
    );
};

