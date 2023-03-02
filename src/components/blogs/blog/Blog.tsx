import React from "react";
import {DummyImage} from "react-simple-placeholder-image";
import style from './Blog.module.css';
import {BlogType} from "../../../api/api";

export const Blog = ({id, name, websiteUrl, description, createdAt}: BlogType) => {

    const createdAtFormat = new Date(createdAt).toLocaleDateString()

    return (
        <div className={style.blogWrapper}>
            <div>
                <button>Back to blogs</button>
            </div>
            <div className={style.blogBlock}>
                {/* <div>
                    <DummyImage shape='image' width={1028} height={312} className={style.image}/>
                </div>*/}
                <DummyImage shape='image' width={156} height={156} className={style.image}/>
                <div className={style.descriptionBlock}>
                  <h4 className={style.title}>{name}</h4>
                    <p>{`Blog creation date:${createdAtFormat}`}</p>
                    <p className={style.website}>
                        WebSite: <a href={websiteUrl} target='_blank' rel="noreferrer">{websiteUrl}</a>
                    </p>
                    <p className={style.description}>{description}</p>
                </div>
            </div>
        </div>
    )
}