
import React from "react";
import {DummyImage} from "react-simple-placeholder-image";

type BlogPropsType={
    title:string
    website:string
    description:string
}
export const BlogInfo = ({title,website,description}:BlogPropsType) => {
    return (
        <div>
            <DummyImage shape='image' width={156} height={156}/>
            <h4>{title}</h4>
            <p>{website}</p>
            <p>{description}</p>
        </div>
    )
}