"use client";

import "./button.css";

const Button = ({ label, bg, hover, type }) => {
  return (
    <>
      <button
        type={type}
        className={`btn-77 font-medium text-xl ${bg} ${hover} text-white`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
