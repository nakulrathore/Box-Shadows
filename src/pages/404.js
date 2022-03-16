import React, { useState } from "react";
import { Link, navigate } from "gatsby";

import "./404.scss";

// markup
const NotFoundPage = () => {
  const [isBlackHoleExpanded, setIsBlackHoleExpanded] = useState(false);

  const expandBlackHole = () => {
    setIsBlackHoleExpanded(true);
    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return (
    <main className="error-404-container">
      <div
        onClick={() => expandBlackHole()}
        to="/"
        className={`black-hole ${isBlackHoleExpanded ? "full" : ""}`}
      >
        Lost?
      </div>
    </main>
  );
};

export default NotFoundPage;
