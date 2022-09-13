import React from "react";
import Link from "../components/Link/Link";

import "./Dropdown.scss";

const Dropdown = ({ dropdownInternal, children }) => {
  const [showDropdown, setShowDropdown] = React.useState(false);
  const showDropdownClass = showDropdown ? " show" : "";
  return (
    <div className="Dropdown">
      <div
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        {children}
        <div className={`Dropdown__dropdown${showDropdownClass}`}>
          {dropdownInternal}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
