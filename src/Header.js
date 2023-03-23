import React from "react";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
  return (
    <>
      <div className="header">
        <MenuOutlinedIcon className="hamburger"/>
        <h1>Notes</h1>
      </div>
    </>
  );
};

export default Header;