import React from 'react';
import style from "../blogItem/BlogItem.module.css"
import {DummyImage} from "react-simple-placeholder-image";
import {Link} from "react-router-dom";

type PropsType = {
    id: string
    name: string
    createdAt: string
    websiteUrl: string
    description: string
}

export const BlogItem = ({id, name, createdAt, websiteUrl, description}: PropsType) => {
    return (
        <div className={style.blogWrapper}>
            <div className={style.blogBlock}>
                <DummyImage shape='image' width={156} height={156} className={style.image}/>
                <div className={style.descriptionBlock}>
                    <Link to={`/blogs/${id}`}>
                        <h4 className={style.title}>{name}</h4>
                    </Link>
                    <p className={style.website}>
                        Website:<a href={websiteUrl} target='_blank'
                                   rel="noreferrer">{websiteUrl}</a>
                    </p>
                    <div className={style.description}>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

