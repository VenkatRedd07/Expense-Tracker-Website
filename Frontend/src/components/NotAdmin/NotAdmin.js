import React from "react";
// import notAdmin from "../../img/notadmin.svg";
const NotAdmin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <h1 className="text-danger">You are not an admin</h1>
      <img alt="NotAdmin" className=" img-fluid m-3" src={"https://imgs.search.brave.com/aTyke3nBYsm52NartGznGD5Xf2eTrYLrf9MHNehFmnM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/LmVtb2ppLmdnL2Vt/b2ppcy8xNDA2LW5v/ZC5wbmc"} />
    </div>
  );
};

export default NotAdmin;
