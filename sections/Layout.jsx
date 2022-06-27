import React from "react";
import { useState, useCallback } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleOutsideClick = useCallback(
    (e) => {
      if (e.target.length !== 0 && open) {
        setOpen(!open);
      }
    },
    [open]
  );
  return (
    <div>
      <Navbar
        open={open}
        handleClick={handleClick}
        handleOutsideClick={handleOutsideClick}
      />
      <main onClick={handleOutsideClick}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
