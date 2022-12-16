import React from "react";

const Header = ({ title, text }) => {
  const nameOf = (name) => {
    console.log(name);
  };
  return (
    <div>
      {title}
      <button onClick={() => nameOf(title)}>{text}</button>
    </div>
  );
};

export default Header;
