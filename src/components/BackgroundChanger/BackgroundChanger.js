import React, { useState } from "react";

//styles
import "./background_changer.scss";

const backgroundColors = [
  "FFFFFF",
  "F8F8F8",
  "F0F0F0",
  "DCDCDC",
  "BEBEBE",
];

const BackgroundChanger = () => {
  const [selectedColor, setselectedColor] = useState("FFFFFF");

  const selectBgColor = (color) => {
    setselectedColor(color);
    document.body.style.backgroundColor = '#' + color;

  };
  return (
    <section className="background-changer">
      {backgroundColors.map((color, index) => {
        return (
          <button
            onClick={selectBgColor.bind(this, color)}
            key={index}
            className={`background-color-picker
            ${selectedColor === color ? "selected" : ""}`}
            style={{
              backgroundColor: `#${color}`,
            }}
          >
            #{color}
          </button>
        );
      })}
      {/* <span>Background</span> */}
    </section>
  );
};

export default BackgroundChanger;
