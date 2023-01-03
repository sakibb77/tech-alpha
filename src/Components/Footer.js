import React from "react";

const Footer = () => {
  return (
    <div className="footer h-16 flex items-center justify-center bg-violet-700 text-violet-50">
      <p>&copy; {new Date().getFullYear()} tech alfa all rights reserved</p>
    </div>
  );
};

export default Footer;
