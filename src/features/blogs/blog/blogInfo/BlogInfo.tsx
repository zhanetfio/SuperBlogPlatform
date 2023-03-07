import React, {useState} from 'react';
import {formattedDate} from "../../../../common/utils/converterDate";
import {Button} from "@mui/material";
import dropDown from '../../../../assets/images/Vector 50.svg';

import {DummyImage} from "react-simple-placeholder-image";


type PropsType = {
    name: string;
    createdAt: string;
    websiteUrl: string;
    description: string;
}

export const BlogInfo = ({name, createdAt, websiteUrl, description}: PropsType) => {
    const [isShowMoreAsked, setIsShowMoreAsked] = useState(false);

    const onShowMoreClick = () => {
        setIsShowMoreAsked(true)
    }

    return (
        <div>
            <DummyImage shape='image' height={312} width={1028}/>
            <div>
                <div>
                    <DummyImage shape='image' height={156} width={156}/>
                </div>
                <div>
                    <h3>{name}</h3>
                    <div>{formattedDate(createdAt)}</div>
                    <div>Website: </div> <a href={websiteUrl}/>
                    <p>{description}</p>
                    <div>
                        <Button onClick={onShowMoreClick}>Show more <img src={dropDown}/></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

