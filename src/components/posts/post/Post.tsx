import React from 'react';
import {Navigate} from "react-router-dom";
import {DummyImage} from "react-simple-placeholder-image";
import style from "./Post.module.css"

type PostPropsType={
   // id:string
    title:string
    description:string
    createdAt:string
}


export const Post = ({title,description,createdAt}:PostPropsType) => {

    const backListHandler=()=>{
        return <Navigate to={ '/posts'}/>
    }

    return (
        <div>
            <div>
            <button onClick={backListHandler}>Back to posts</button>
            </div>
            <div>
                <div>{title}</div>
                <p>{createdAt}</p>
                <DummyImage shape='image'  className={style.image}/>
                <div>{description}</div>

            </div>
        </div>
    );
};
