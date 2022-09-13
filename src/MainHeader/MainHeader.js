import React from "react";

import Arrow from "../assets/svgs/Arrow.svg";
import Link from "../components/Link/Link";
import Dropdown from "../Dropdown/Dropdown";

import "./MainHeader.scss";

const MainHeader = () => {
  return (
    <header className="MainHeader">
      <Dropdown
        dropdownInternal={
          <div className="MainHeader__dropdown">
            <Link href="#">Link 1</Link>
            <Link href="#">Link 2</Link>
          </div>
        }
      >
        <span className="MainHeader__dropdown-link">
          Item 1<Arrow className="MainHeader__dropdown-svg" />
        </span>
      </Dropdown>

      <Dropdown dropdownInternal={<div>List of links 2</div>}>
        <span className="MainHeader__dropdown-link">
          Item 2<Arrow className="MainHeader__dropdown-svg" />
        </span>
      </Dropdown>
      <Dropdown dropdownInternal={<div>List of links 3</div>}>
        <span className="MainHeader__dropdown-link">
          Item 3<Arrow className="MainHeader__dropdown-svg" />
        </span>
      </Dropdown>
      <Dropdown dropdownInternal={<div>List of links 4</div>}>
        <span className="MainHeader__dropdown-link">
          Item 4<Arrow className="MainHeader__dropdown-svg" />
        </span>
      </Dropdown>
    </header>
  );
};

export default MainHeader;
