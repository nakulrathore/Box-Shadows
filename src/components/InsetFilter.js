import React from "react";

const InsetFilter = ({ onChange }) => {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <label className="inset-filter-switch">
        <input
          type="checkbox"
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        />
        <span className="slider"></span>
      </label>
      <p>Show inset shadows only</p>
    </span>
  );
};

export default InsetFilter;
