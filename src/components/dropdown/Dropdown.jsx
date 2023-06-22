import './Dropdown.css'
import * as CgIcons from 'react-icons/cg'
import { Link } from "react-router-dom";
import { DropdownItem } from '../../data/DropdownItem'
import {useState} from 'react'

const Dropdown = () =>{
    const [open,setOpen] = useState(false);

    return(
        <div className="container">
            <div className="icon">
                    <CgIcons.CgProfile onClick={()=>setOpen(!open)}/>
            </div>
            <div className={`menu ${open? 'active' : 'inactive'}`} >
                <ul className="menu-items">
                {DropdownItem.map((item, index) => (
                    <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        <div className="icon">{item.icon}</div>
                        <span>{item.title}</span>
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}


export default Dropdown