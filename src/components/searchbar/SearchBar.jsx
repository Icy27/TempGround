import {useState} from 'react'
import './SearchBar.css'
import * as AiIcons from 'react-icons/ai'


const SearchBar = () => {
    const [searchTerm,setSearchTerm] = useState('')

    return (
        <div className='container'>
            <div className='logo'>
                <AiIcons.AiOutlineSearch />
            </div>
            <input 
            placeholder='Search' 
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
             />
        </div>
    )
}

export default SearchBar;