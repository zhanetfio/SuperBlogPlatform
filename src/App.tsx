import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {Navigate, Route, Routes} from "react-router-dom";
import {Blogs} from "./components/blogs/Blogs";
import {Posts} from "./components/posts/Posts";




function App() {
    return (
        <div className="App">
            <Header/>
            <div className="appWrapper">
            <Nav/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
                    <Route path={'/blogs/'} element={<Blogs/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>


                   {/* <Route path={'/error404'} element={<Page404/>}/>
                    <Route path={'*'} element={<Navigate to={'/error404'}/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
