import React from 'react';
import {BlogInfo} from "./blogInfo/BlogInfo";

export const Blogs = () => {
    return (
        <div>
            <div>Blogs</div>
            <Search/>
            <Sorter/>
            <BlogInfo title={'The best blog in our village'} website={'Website: https://www.youtube.com/'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '}/>
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

