import React from 'react';

interface InputProps {
  label: string;
  name: string;
  className?: string;
}

function Input({ label, name, className }: InputProps) {
  return (
    <div className={"relative w-full" + (className ? " " + className : "")}>
      <input
        type="text"
        id={name}
        className="block px-6 pb-2.5 pt-4 h-16 mt-3 w-full text-white bg-transparent rounded-full border-1 border-unit-gray-70 appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
        placeholder=" "
        name={name}
      />
      <label
        htmlFor={name}
        className="absolute ml-4 text-white duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-black px-2 peer-focus:px-2 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;