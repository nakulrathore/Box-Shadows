import React from 'react';
import './styles.css';

const SortBox = ({
  value,
  onChange
}) => {
  return (
    <div className="sort-box">
      <div className="sort-box__icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px">
          <path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
        </svg>
      </div>
      <select
        value={value}
        onChange={({ target: { value } }) => onChange(value)}
        className="sort-box__dropdown"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  )
}

export default SortBox
