import React from "react";

function Header(props) {
  const myStyledComponentStyles = {
    backgroundColor: "#b3ecff",
    fontFamily: "sans-serif",
    padding: "50px",
    margin: "50px",
    marginLeft: 50,
    marginRight: 50,
    boxShadow: "5px 5px 15px",
    borderRadius: 50,
    textAlign: "center",
    border: "1px solid cyan",
    borderWidth: 2,
    borderColor: "#8585ad",
  };
  return (
    <div style={myStyledComponentStyles}>
      <h1>Help Queue!</h1>
      <p>Create a ticket so we can assist you.</p>
    </div>
  );
}

export default Header;
