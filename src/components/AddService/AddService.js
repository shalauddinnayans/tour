import React from "react";
import { Link } from "react-router-dom";

const AddService = () => {
  return (
    <div>
      <h1>What do you wanna add?</h1>
      <div>
        <div>
          <Link to="/addtour">Tour</Link>
        </div>
        <div>
          <Link to="/addhotel">Hotel</Link>
        </div>
      </div>
    </div>
  );
};

export default AddService;
