import React from "react";

const DropDown = () => {
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#f0f0f0",
        border: "1px solid black",
        borderRadius: "4px",
        marginLeft: "700px"
      }}
    >
      <select>
        <option value="">Select a country</option>
        <option value="Nepal">Nepal</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>
    </div>
  );
};

export default DropDown;
