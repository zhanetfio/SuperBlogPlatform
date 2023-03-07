import React from 'react';
import style from './Nav.module.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import {NavLink} from "react-router-dom";

type LinkType={
    path:string
    title:string
    icon:React.ReactElement
}
const navLinks:LinkType[]=[
    {path:'/blogs',title:'Blogs',icon:<FormatListBulletedIcon/>},
    {path:'/posts',title:'Posts',icon:<GridViewOutlinedIcon/>},
]

export const Nav = () => {
    return (
        <div className={style.navBlock}>
            {navLinks.map((link,index)=>{
                return(
                    <NavLink  to={link.path} style={({isActive})=>
                        (isActive ? {color:'#f9346b'} : {color:'black'})}>
                        <div className={style.navItem}>
                            {link.icon}
                            <span>{link.title}</span>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    );
};

