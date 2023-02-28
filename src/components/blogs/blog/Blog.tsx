import React from "react";
import {DummyImage} from "react-simple-placeholder-image";
import style from './BlogInfo.module.css';
import {BlogType} from "../../../api/api";
import {NavLink} from "react-router-dom";

export const Blog = ({id, name, websiteUrl, description, createdAt}: BlogType) => {



const createdAtFormat=new Date(createdAt).toLocaleDateString()
    return (
        <div>

            <div className={style.blogBlock}>
               {/* <div>
                    <DummyImage shape='image' width={1028} height={312} className={style.image}/>
                </div>*/}
                <DummyImage shape='image' width={156} height={156} className={style.image}/>
                <div className={style.descriptionBlock}>
                    <NavLink to={`/blogs/${id}`}> <h4 className={style.title}>{name}</h4></NavLink>
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