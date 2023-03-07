import React from 'react';
import style from './App.module.css';
import {Header} from "./features/header/Header";
import {Nav} from "./features/nav/Nav";
import {Navigate, Route, Routes} from "react-router-dom";
import {Blogs} from "./features/blogs/Blogs";
import {Posts} from "./features/posts/Posts";
import {Blog} from "./features/blogs/blog/Blog";





function App() {
   /* const blog = useAppSelector(state=>state.blogs.items)*/

    return (
        <div className={style.app}>
            <Header/>
            <div className={style.appWrapper}>
            <Nav/>
                <div className={style.contentWrapper}>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
                    <Route path={'/blogs/'} element={<Blogs/>}/>
                    <Route path={'/blogs/:id'} element={<Blog />}/>

                    <Route path={'/posts'} element={<Posts/>}/>


                   {/* <Route path={'/error404'} element={<Page404/>}/>
                    <Route path={'*'} element={<Navigate to={'/error404'}/>}/>*/}
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
