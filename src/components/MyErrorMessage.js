import React from "react";

const MyErrorMessage = (props) => {
  return <div className="error">{props.children}</div>;
};

export default MyErrorMessage;
