import React, {useEffect, useState} from 'react';
import {Blog} from "./blog/Blog";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getBlogsTC} from "./blog-reducer";
import style from './Blogs.module.css'
import {Search} from "../../common/components/search/Search";
import {SortSelect} from "../../common/components/SortSelect";
import dropDown from '../../assets/images/Vector 50.svg'
import {BlogItem} from "./blogItem/BlogItem";

export const Blogs = () => {

    const dispatch = useAppDispatch()
    const blogs = useAppSelector(state => state.blogs.items)
    const [searchText, setSearchText] = useState<string>('')

    useEffect(() => {
        dispatch(getBlogsTC())
    }, [dispatch])

    const handlerChangeSearch = (text: string) => {
        // dispatch(setQueryParamsAC(text.length ? {packName: text} : {packName: undefined}))
    }


    return (
        <div className={style.blogsWrapper}>
            <div className={style.pageTitle}>Blogs</div>
            <div className={style.inputBlock}>
                <Search handleChangeSearch={handlerChangeSearch} searchText={searchText} setSearchText={setSearchText}/>
                <SortSelect/>
            </div>
            <div className={style.blogBlock}>

                    {blogs.map(({id, name, description, websiteUrl,createdAt}) => {
                            return (
                                <BlogItem key={id}
                                          name={name}
                                          description={description}
                                          id={id}
                                          websiteUrl={websiteUrl}
                                          createdAt={createdAt}
                                />
                            )
                        }
                    )}

            </div>
            <div>
                <button className={style.button}>Show more<img src={dropDown}/></button>
            </div>
        </div>
    )
        ;
};



