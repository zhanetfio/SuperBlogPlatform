import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Blogs} from "../blogs/Blogs";
import {Posts} from "../posts/Posts";
import {Page404} from "../../common/Page404";

export const RoutesList = () => {
    return (
        <div>
            <Routes>
                <Route path={'blogs'} element={<Blogs/>}/>
                <Route path={'posts'} element={<Posts/>}/>

                <Route path={'/error404'} element={<Page404/>}/>
                <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
            </Routes>
        </div>
    );
};

