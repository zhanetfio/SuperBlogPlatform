import React, {useEffect} from 'react';
import {Blog} from "./blog/Blog";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getBlogsTC} from "./blog-reducer";
import style from './Blogs.module.css'
import {NavLink, Outlet, useParams} from "react-router-dom";

export const Blogs = () => {

    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.items)
    

    useEffect(() => {
        dispatch(getBlogsTC())
    }, [dispatch])

    return (
        <div className={style.blogsWrapper}>
            <div className={style.pageTitle}>Blogs</div>
            <Search/>
            <Sorter/>
            <div className={style.blogBlock}>
                {/* <div>
                    <button>Back to blogs</button>
                </div>*/}

                {blogs.map((b) => {
                    return(
                    <NavLink to={`/blogs/${b.id}`}>
                        <Blog key={b.id}
                              id={b.id}
                              name={b.name}
                              websiteUrl={b.websiteUrl}
                              description={b.description}
                              createdAt={b.createdAt}
                        />
                    </NavLink>
                    )
                })
                }
                <Outlet/>
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

