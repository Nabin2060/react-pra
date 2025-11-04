import React from "react";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <>
      <div>
        <div
          style={{
            height: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            backgroundColor: "#4a5759",
            color: "white"
          }}
        >
          <span
            style={{ fontWeight: "bold", fontSize: "24px", marginLeft: "20px" }}
          >
            Where is the world?
          </span>
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "20px",
              backgroundColor: "transparent"
            }}
          >
            Dark Mode
          </button>
        </div>
        <Searchbar />
      </div>
    </>
  );
};

export default Header;
