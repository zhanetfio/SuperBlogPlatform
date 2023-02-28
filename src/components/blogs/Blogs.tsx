import React, {useEffect} from 'react';
import {Blog} from "./blog/Blog";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getBlogsTC} from "./blog-reducer";
import style from './Blogs.module.css'

export const Blogs = () => {
    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.items)

    useEffect(() => {
        dispatch(getBlogsTC())
    }, [])

    return (
        <div className={style.blogWrapper}>
            <div className={style.pageTitle}>Blogs</div>
            <Search/>
            <Sorter/>
            <div>
                <div>
                    <button>Back to blogs</button>
                </div>
                {blogs.map((b) => (
                    <Blog key={b.id}
                          id={b.id}
                          name={b.name}
                          websiteUrl={b.websiteUrl}
                          description={b.description}
                          createdAt={b.createdAt}
                    />

                ))
                }
            </div>
            <button className={style.button}>Show more</button>
        </div>
    );
};

export const Search = () => {
    return (
        <div></div>
    )
}

export const Sorter = () => {
    return (
        <div></div>
    )
}

