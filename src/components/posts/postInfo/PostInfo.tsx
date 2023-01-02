import React from 'react';
import {DummyImage} from "react-simple-placeholder-image";
import style from './PostInfo.module.css'

type PostInfoPropsType={
    title:string
    description:string
    createdAt:string
}

export const PostInfo = ({title,description,createdAt}:PostInfoPropsType) => {
    return (
        <div className={style.postInfoBlock}>
            <DummyImage shape='image'  className={style.image}/>
            <h4 className={style.title}>{title}</h4>
           {/*<p>{website}</p>*/}
            <p className={style.description}>{description}</p>
            <p className={style.createdAt}>{createdAt}</p>
        </div>
    );
};

