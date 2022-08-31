import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import { useNavigate } from "react-router-dom";
import OpenToggle from "./OpenToggle";

const Header = () => {
  const [openToggle, setOpenToggle] = useState(false);

  const navigate = useNavigate();
  const renderHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.left}>
          <h2 onClick={renderHome}>REACT-JS</h2>
        </div>
        <div className={classes.right}>
          <Link to="/sorting">SORTING</Link>
          <span onClick={() => setOpenToggle(!openToggle)}>TOGGLE</span>
        </div>
      </div>
      {openToggle && <OpenToggle />}
    </>
  );
};

export default Header;
