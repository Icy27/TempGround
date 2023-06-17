import './NavigationBar.css'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'

import React,{useState} from 'react'
import { IconContext } from 'react-icons';

const NavigationBar=()=>{
    const [sidebar,setSidebar] = useState(false)

    const showSidebar =() => setSidebar(!sidebar)
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <div className="nav-container">
            <Link to='#'className='menu-bars'>
                <FaIcons.FaBars onClick={showSidebar}/>
            </Link>
        
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">

                        {SidebarData.map((item,index) => 
                        (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
        </>
        
    )
}

export default NavigationBar