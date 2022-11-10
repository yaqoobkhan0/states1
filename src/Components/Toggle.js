import React from "react";

const Toggle = ({ body_title, postDate, thoughts_para }) => {
  return (
    <div className="App">
      <div className="body-container">
        <h2>{body_title}</h2>
        <p
          style={{
            fontStyle: "italic",
            fontFamily: "-moz-initial",
            fontSize: "16px",
            padding: "0.1rem",
          }}
        >
          {postDate}
        </p>
        <p
          style={{
            fontStyle: "italic",
            fontFamily: "-moz-initial",
            fontSize: "20px",
            padding: "0.1rem",
            // margin:'0.5rem'
          }}
        >
          {thoughts_para}
        </p>
      </div>
    </div>
  );
};

export default Toggle;