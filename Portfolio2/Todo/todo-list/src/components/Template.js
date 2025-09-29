import React from "react";
import "./Template.css";

const Template = ({ children, todoLength }) => {
  return (
    <div className="Template">
      <div className="title">
        <div className="title-gif"></div>
        <div className="list-num">({todoLength})</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
