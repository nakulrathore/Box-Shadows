import React from 'react';
import Search from './Search';

const SearchFilterBox = ({
  searchText,
  onSearchChange
}) => {
  return (
    <div className="search-filter-box">
      <Search
        value={searchText}
        onChange={onSearchChange}
      />
    </div>
  )
}

export default SearchFilterBox
