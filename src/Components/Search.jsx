import React from 'react'
import {FiSearch} from "react-icons/fi"

const Search = ({hadleSearchText}) => {
  return (
    <div className='search'>
        <FiSearch className='icon'/>
        <input type="text" placeholder='Type To Search' onChange={hadleSearchText}/>
    </div>
  )
}

export default Search