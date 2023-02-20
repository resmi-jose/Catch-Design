import React from "react";
import "../Scss/index.scss";
const Form = () => {
  return (
    <div className="form-container">
      <h6>Form title</h6>
      <div className="row">
        <div className="col">
          <input type="text" placeholder="First name" />
        </div>
        <div className="col">
          <input type="text" placeholder="Last name" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input type="text" placeholder="Email address" />
        </div>
        <div className="col">
          <select id="mySelect" placeholder="City">
            <option value="option1">City</option>
          </select>
        </div>
      </div>
      <button type="submit">Submit</button>
      
    </div>
  );
};

export default Form;
