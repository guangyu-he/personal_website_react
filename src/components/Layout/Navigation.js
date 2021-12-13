import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [menustate, set_menustate] = useState(false);
  const change_menustate = (props) => {
    if (typeof props === "object") {
      setTimeout(() => {
        set_menustate(!menustate);
      }, 100);
    } else {
      setTimeout(() => {
        set_menustate(props);
      }, 100);
    }
  };

  //ANCHOR using useNavigate to pass props
  const navigate = useNavigate();
  const clicktohome = (event) => {
    change_menustate(false);
    navigate("/");
  };
  const clicktoportfolio = (event) => {
    change_menustate(false);
    navigate("/portfolio");
  };
  const clicktoblog = (event) => {
    change_menustate(false);
    navigate("/blog");
  };
  const clicktocontact = (event) => {
    change_menustate(false);
    navigate("/contact");
  };

  return (
    <div
      id="navigation-bar"
      className="
        fixed
        outline-none rounded-lg
        inset-x-4 h-12 top-4
        bg-gray-500
        inline-flex
        "
    >
      <span
        className="
          absolute lg:inset-y-2 inset-y-3 left-4
        lg:text-2xl text-1xl text-white"
      >
        Guangyu's Personal Website
      </span>

      <div id="buttons" className="absolute inset-y-1 right-0 hidden lg:inline">
        <button
          className="font-bold text-white p-2 hover:underline"
          onClick={clicktohome}
        >
          Home
        </button>
        |
        <button
          className="font-bold text-white p-2 hover:underline"
          onClick={clicktoportfolio}
        >
          Portfolio
        </button>
        |
        <button
          className="font-bold text-white p-2 hover:underline"
          onClick={clicktoblog}
        >
          Blog
        </button>
        |
        <button
          className="font-bold text-white p-2 hover:underline"
          onClick={clicktocontact}
        >
          Contact
        </button>
      </div>

      <div
        id="menu-button"
        className="absolute right-0 rounded-lg hover:bg-gray-200 w-12 h-12 lg:hidden outline-none"
      >
        <button
          className="relative inset-x-1/4 inset-y-1/4 text-white"
          onClick={change_menustate}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          menustate ? "" : "hidden"
        } absolute right-0 top-12 bg-white rounded-lg border border-gray-200 w-48 text-grey-900 text-sm font-medium`}
      >
        <button
          className="block px-4 py-2 border-b border-gray-200 w-full rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          onClick={clicktohome}
        >
          Home
        </button>
        <button
          className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          onClick={clicktoportfolio}
        >
          Portfolio
        </button>
        <button
          className="block px-4 py-2 border-b border-gray-200 w-full hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          onClick={clicktoblog}
        >
          Blog
        </button>
        <button
          className="block px-4 py-2 border-b border-gray-200 w-full rounded-b-lg hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 cursor-pointer"
          onClick={clicktocontact}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default React.memo(Navigation);
