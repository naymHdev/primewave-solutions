"use client";

import "./button.css";

const Button = ({ label, bg, hover, type }) => {
  return (
    <>
      <button
        type={type}
        className={`btn-77 font-semibold text-xl ${bg} ${hover} text-white`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
