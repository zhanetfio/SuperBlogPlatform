import React from "react";
import {DummyImage} from "react-simple-placeholder-image";
import style from './BlogInfo.module.css';

type BlogPropsType = {
    title: string
    website: string
    description: string
}
export const BlogInfo = ({title, website, description}: BlogPropsType) => {
    return (
        <div className={style.blogBlock}>

            <DummyImage shape='image' width={156} height={156} className={style.image}/>
            <div className={style.descriptionBlock}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.website}>{website}</p>
                <p className={style.description}>{description}</p>
            </div>
        </div>
    )
}