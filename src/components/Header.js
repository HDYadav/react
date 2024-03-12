
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constans";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => { 
  const [btnNameReact, setbtnNameReact] = useState("Login");
 
  useEffect(() => {
   // console.log("use effect rendered");
  });

  onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-2">
      <div className="flex items-center">
        <img className=" w-44" src={LOGO_URL}></img>
      </div>

      <div className="">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status {onlineStatus ? "🟢" : "🍎"}</li>
          <li className="px-4">
            <Link to={"/"}> Home </Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}> About us </Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}> Contact us </Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}> Grocery </Link>
          </li>
          <button
            className="login"
            onClick={() => { 
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login"); 
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;