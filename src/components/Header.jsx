import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (<>
    <div className="ui fixed menu p-3">
      <div className="ui container center">
        <h1><Link to={"/"}>Redux Ecomm</Link></h1>
      </div>
    </div>
  </>);
}

export default Header;
