import React from "react"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const NavbarData = [
    {
        title:'HomePage',
        path:'/',
        icon:<AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title:'About',
        path:'/About',
        icon:<AiIcons.AiOutlineExclamationCircle />,
        cName: 'nav-text'
    }
]