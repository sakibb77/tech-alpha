import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[calc(100vh-144px)] flex flex-col items-center justify-center">
      <img
        src={`https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000`}
        alt=""
        className="w-60 md:w-72"
      />
      <Link
        to={"/"}
        className="p-2 px-5 md:p-3 md:px-8 bg-violet-700 text-violet-50 font-medium text-sm md:text-lg rounded uppercase"
      >
        ← go to home
      </Link>
    </div>
  );
};

export default NotFound;
