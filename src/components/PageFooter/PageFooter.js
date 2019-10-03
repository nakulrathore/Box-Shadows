import React from "react";
import COLORS from "../../colors";

const PageFooter = props => {
  return (
    <footer className="page-footer">
      <h5 className="page-footer__title" style={{color: props.isDarkColorSelected ? COLORS.WHITE : COLORS.BLACK}}>
        {props.title}
      </h5>
      {props.children}
    </footer>
  );
};

export default PageFooter;