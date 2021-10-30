import React from "react";
import { Link } from "react-router-dom";

const MyOrder = () => {
  return (
    <div>
      <div>
        <Link to="/manageorder">Order Management</Link>
        <Link to="/add">Add Services</Link>
      </div>
      <div></div>
    </div>
  );
};

export default MyOrder;
