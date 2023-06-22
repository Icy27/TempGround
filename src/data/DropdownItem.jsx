import React from "react"
import * as CgIcons from 'react-icons/cg'
import * as LuIcons from 'react-icons/lu'
import * as GrLogout from 'react-icons/gr'

export const DropdownItem = [
    {
        title:'Profile',
        path:'/Profile',
        icon:<CgIcons.CgProfile />,
        cName: 'text'
    },
    {
        title:'Setting',
        path:'/Setting',
        icon:<LuIcons.LuSettings />,
        cName: 'text'
    },
    {
        title:'Sign Out',
        path:'/SignOut',
        icon:<GrLogout.GrLogout />,
        cName: 'text'
    }
]