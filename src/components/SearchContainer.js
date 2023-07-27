import React from 'react'
import "./SearchContainer.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = () => {
  return (
    
    <div className='search-container'>
        <input type='text' placeholder='search all the gifs and stickers here'></input>
        <div className='search-icon'>
            <SearchIcon />
        </div>
    </div>
          
    
  )
}

export default SearchContainer
