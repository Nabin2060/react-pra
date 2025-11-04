import React from "react";
import DropDown from "./DropDown";

const Searchbar = () => {
  return (
    <div style={{ margin: "20px", display: "flex", marginTop: "40px" }}>
      <input
        style={{
          padding: "10px",
          width: "300px",
          backgroundColor: "#f0f0f0",
          border: "1px solid black",
          borderRadius: "4px"
        }}
        type="text"
        placeholder="Search for a country..."
      />
      <div style={{ marginLeft: "100px" }}>
        <DropDown />
      </div>
    </div>
  );
};

export default Searchbar;
