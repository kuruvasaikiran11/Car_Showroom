import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav class="navbar fixed-top mb-5" data-bs-theme="dark" style={{backgroundColor : "#e3f2fd", color: "black"} }>
        <div class="container-fluid">
          <a class="navbar-brand" href="/" style={{color:"black", textTransform:"capitalize", fontWeight:"bolder", fontSize:"30px"}}>
            CarsRoom
          </a>
        </div>
      </nav>
    </>
  );
};
