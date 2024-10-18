import React from "react";

function Footer() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:justify-between">
      <div className="p-2 m-4" >
        <ul className="flex items-center gap-4 text-xl">
          <li>
            <a href="%">facebook</a>
          </li>
          <li>
            <a href="%">instagram</a>
          </li>
          <li>
            <a href="%">twitter</a>
          </li>
        </ul>
      </div>
      <div className="" >
        <img  className="px-2" src="/assets/Help-Avatar.svg" alt="help" />
        <div>
        <p className="font-playfiar font-medium text-sm ">have any questions</p>
        <a  className="font-loto font-medium text-sm" href="%">Talk to a spacialist</a>
      </div>
      </div>
    

      </div>
   
  );
}

export default Footer;
