// SearchBar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css'; 
import '../ButtonIcon/ButtonIcon'

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Buscar en OverBlogWatch"
        onChange={onChange}
      />
      <FontAwesomeIcon className='search-button' icon={faSearch} />
    </div>
  )
}

export default SearchBar
