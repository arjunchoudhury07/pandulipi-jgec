import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CoreTeam2024 from "./CoreTeam2024";
import WebTeam from "./WebTeam";

const Team = () => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => setChecked(!checked);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const clickAndScroll = () => {
    handleClick();
    scrollToTop();
  };
  return (
    <div className="flex flex-col items-center w-screen bg-[#252b42] pb-10">
      <CoreTeam2024 />
      <WebTeam />
      <NavLink to="/former-team">
        <button
          onClick={clickAndScroll}
          type="button"
          className="cursor-pointe  inline-flex justify-center items-center py-3 px-8  xl:text-xl text-center font-semibold border-2 border-white text-white hover:scale-110 transition-all hover:bg-white hover:text-[#224e68]"
        >
          Show 2k23 Team
        </button>
      </NavLink>
    </div>
  );
};

export default Team;
