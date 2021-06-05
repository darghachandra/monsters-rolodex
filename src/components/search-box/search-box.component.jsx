import React from 'react';
import './search-box.styles.css';

const Search = ({ onChange, placeholder, value }) => {
  return (
    <div className='search-container'>
      <input
        type='search'
        className='search'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Search;
