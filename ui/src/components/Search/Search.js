import React, { Component } from 'react';

const Search = ({onSearch}) => {
  
    console.log("search rendering")
    return (
      <div>
        <label htmlFor="search"><i className="fas fa-search"></i></label>
        <input type="text" name="search" id="searchInput" onChange={onSearch}/>    
      </div>
    )
}
export default Search;