import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Navbar(props) {
  return (
    <nav>
      <img className="img_header" src="https://www.electricaltrainingalliance.org/Content/images/imgInstructor.png" alt="" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/activity">Activity</Link>
        </li>
        <li>
            <ShoppingCartIcon style={{color:'#333'}} /> <span className="cart_qty">{props.basketNumber}</span>
          {/* <a href="/cart">
          </a> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
