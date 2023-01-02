import React from 'react';
import style from './Nav.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={style.navBlock}>
            <div className={style.navItem}>
                <FormatListBulletedIcon/>
                <NavLink to={'/blogs'}><span>Blogs</span></NavLink>
            </div>
            <div className={style.navItem}>
                <GridViewOutlinedIcon/>
                <NavLink to={'posts'}><span>Posts</span></NavLink>
            </div>

        </div>
    );
};

