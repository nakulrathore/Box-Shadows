import React from "react";
import Color from "color";
import COLORS from "../../colors";

const ColorList = ({colors,
                   selectedColor,
                   isDarkColorSelected,
                   onColorChange}) => {
  return (
    <ul className="color-list">
      {colors.map(colorItem =>
        <li
          className="color-list__item"
          key={colorItem.color}
        >
          <button
            onClick={(e) => {
              e.preventDefault();

              onColorChange(colorItem.color);
            }}
            className={`color-list__button ${selectedColor === colorItem.color ? 'color-list__button--selected' : ''}`}
            style={{
              background: colorItem.color,
              color: isDarkColorSelected ? COLORS.WHITE : COLORS.BLACK
            }}
          > </button>
        </li>
      )}
    </ul>
  );
};

export default ColorList;