import React from "react";

const Header = ({ title, text }) => {
  const nameOf = (name) => {
    console.log(name);
  };
  return (
    <header className="header">
      <h1> {title}</h1>
      <button onClick={() => nameOf(title)} className='btn'>{text}</button>
    </header>
  );
};

export default Header;
