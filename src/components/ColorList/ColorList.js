import React from "react";
import Color from "color";
import COLORS from "../../colors";
import ReactTooltip from 'react-tooltip';

const ColorList = ({colors,
                   selectedColor,
                   isDarkColorSelected,
                   onColorChange,
                   onTogglePicker,
                   pickerStatus
                  }) => {
  return (
    <div>
    <ul className="color-list">
      {colors.map(colorItem =>
        <li
          className="color-list__item"
          key={colorItem.color}
        >
          <button title="Select background color"
            onClick={(e) => {
              e.preventDefault();
              onColorChange(colorItem.color, true); // Pass true to hide picker on color change
            }}
            data-tip={ colorItem.color }
            className={`color-list__button ${selectedColor === colorItem.color ? 'color-list__button--selected' : ''}`}
            style={{
              background: colorItem.color,
              color: isDarkColorSelected ? COLORS.WHITE : COLORS.BLACK
            }}
          > </button>
          <ReactTooltip place="top" type="dark" effect="solid"/>
        </li>
      )}
    </ul>
    <button
        onClick={(e) => {
          e.preventDefault();
          
          let mouse = {x: e.clientX, y: e.clientY}
          
          onTogglePicker(mouse);
        }}
        data-tip={pickerStatus ? 'Close' : 'Choose a custom color'}
        className='color-list__button picker'><span>{pickerStatus ? 'X' : '#'}</span></button>
    </div>
  );
};

export default ColorList;