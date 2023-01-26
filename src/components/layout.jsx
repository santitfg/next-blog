import React from "react";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div className="md:p-2 "></div>
      {props.children}

      <footer className="container mx-auto text-justify">
        <div className="p-4"></div>
        <hr className="border-solid border-top-2 border-principal " />
        <div className="p-6"></div>
      </footer>
    </>
  );
};

export default Layout;
