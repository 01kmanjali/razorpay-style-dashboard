import React from "react";

const NotFound = () => {
  return (
    <div className="justify-items-center flex-1">
    <div className="flex flex-col justify-center items-center h-screen text-cente">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-28 text-orange-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75L3 3m18 0l-6.75 6.75M12 12l9 9M3 21l9-9"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <h2 className="font-bold mt-5 text-2xl">
        Devs are still working on it.
      </h2>
    </div>
    </div>
  );
};

export default NotFound;
