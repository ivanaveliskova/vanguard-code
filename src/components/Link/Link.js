import React from "react";

import "./Link.scss";

const Link = ({ href, handleMouseEnter, handleMouseLeave, children }) => {
  return (
    <a
      className="Link"
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

export default Link;
