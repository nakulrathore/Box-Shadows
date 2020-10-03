import React from 'react';
import Search from './Search';
import Sort from '../SortBox/SortBox';

const SearchFilterBox = ({
  searchText,
  sortValue,
  onSearchChange,
  onSortChange
}) => {
  return (
    <div className="search-filter-box">
      <Search
        value={searchText}
        onChange={onSearchChange}
      />
      <Sort
        value={sortValue}
        onChange={onSortChange}
      />
    </div>
  )
}

export default SearchFilterBox
