import React from "react";

import "./Link.scss";

const Link = ({ href, children }) => {
  return (
    <a className="Link" href={href}>
      {children}
    </a>
  );
};

export default Link;
