import React from 'react';
import {DummyImage} from "react-simple-placeholder-image";

type PostInfoPropsType={
    title:string
    description:string
}

export const PostInfo = ({title,description}:PostInfoPropsType) => {
    return (
        <div>
            <DummyImage shape='image' width={300} height={180}/>
            <h4>{title}</h4>
           {/*<p>{website}</p>*/}
            <p>{description}</p>
        </div>
    );
};

