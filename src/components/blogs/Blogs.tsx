import React, {useEffect} from 'react';
import {BlogInfo} from "./blogInfo/BlogInfo";
import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";
import {getBlogsTC} from "./blog-reducer";

export const Blogs = () => {
    const dispatch=useAppDispatch()

    const blogs=useAppSelector(state=>state.blogs.items)

    useEffect(()=>{
        dispatch(getBlogsTC())
    },[])

    return (
        <div>
            <div>Blogs</div>
            <Search/>
            <Sorter/>
            {blogs?.map((b)=>{
                return(
                <BlogInfo key={b.id}
                          title={b.name}
                          website={b.websiteUrl}
                          description={b.description}/>
                          )
            })}
           {/* <BlogInfo title={'The best blog in our village'} website={'Website: https://www.youtube.com/'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}/>*/}
            <button>Show more</button>
        </div>
    );
};

 export const Search = ()=>{
    return(
        <div></div>
    )
}

export  const Sorter=()=>{
     return(
         <div></div>
     )
}

