import React from 'react'
import '../styles/SearchBox.css'
import SearchIcon from '@mui/icons-material/Search';


const SearchBox =(props)=>{
  return (
    <div className='search'>
        <input 
        className='form' 
        placeholder='search....'
        value={props.value}
        onChange={(event)=> props.setSearchValue(event.target.value)}>
        </input>
        <div className='icon'>
        <SearchIcon sx={{ fontSize: 25 }}/>
        </div>
    </div>
  )
}
export default SearchBox