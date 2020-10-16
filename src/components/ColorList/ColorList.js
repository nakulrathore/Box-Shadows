import React from "react";
import COLORS from "../../colors";
import ReactTooltip from "react-tooltip";

const ColorList = ({ colors, selectedColor, isDarkColorSelected, onColorChange, onTogglePicker, pickerStatus }) => {
  return (
    <div className="bg-colors">
      <ul className="color-list">
        {colors.map(colorItem => (
          <li className="color-list__item" key={colorItem.color}>
            <button
              title="Select background color"
              onClick={e => {
                e.preventDefault();
                onColorChange(colorItem.color, true); // Pass true to hide picker on color change
              }}
              data-tip={colorItem.color}
              className={`color-list__button ${selectedColor === colorItem.color ? "color-list__button--selected" : ""}`}
              style={{
                background: colorItem.color,
                color: isDarkColorSelected ? COLORS.WHITE : COLORS.BLACK
              }}
            >
              {" "}
            </button>
            <ReactTooltip place="top" type="dark" effect="solid" />
          </li>
        ))}
        <li>
          <button
            onClick={e => {
              e.preventDefault();

              let mouse = { x: e.clientX, y: e.clientY };

              onTogglePicker(mouse);
            }}
            data-tip={pickerStatus ? "Close" : "Choose a custom color"}
            className="color-list__button picker"
          >
            <span>{pickerStatus ? "X" : "#"}</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ColorList;
