import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constans";

const useRestaurentMenu = (resID) => {

     const [resInfo, setResInfo] = useState(null);
    
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resID);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
    }
    return resInfo;
};

export default useRestaurentMenu;
