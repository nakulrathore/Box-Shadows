import React from 'react';
import './styles.css';

const FilterBox = ({
  brands,
  selected,
  onChange
}) => {
  return (
    <div className="filter-box">
      {
        brands.map((brand, i) => {
          return (
            <div
              className="filter-box__brand"
              key={`${brand + i}`}
            >
              <input
                type="checkbox"
                checked={selected.includes(brand)}
                onChange={() => onChange(brand)}
              /> { brand }
            </div>
          )
        })
      }
    </div>
  )
}

export default FilterBox
