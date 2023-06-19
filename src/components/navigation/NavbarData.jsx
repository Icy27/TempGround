import React from "react"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const NavbarData = [
    {
        title:'HomePage',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'About',
        path:'/About',
        icon:<IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }
]