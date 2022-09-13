import React from "react";
import Link from "../components/Link/Link";

import "./Dropdown.scss";

const Dropdown = ({ dropdownInternal, children }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <div className="Dropdown">
      <Link
        href="#"
        handleMouseEnter={() => setShowDropdown(true)}
        handleMouseLeave={() => setShowDropdown(false)}
      >
        {children}
      </Link>
      {showDropdown && (
        <div className="Dropdown__dropdown">{dropdownInternal}</div>
      )}
    </div>
  );
};

export default Dropdown;
