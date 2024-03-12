import { useEffect, useState } from "react";
import { RESTORENTS_LIST } from "../utils/constans";
 

const useBody = () => {

 
    const [ListOfRestoRents, setListOfRestoRents] = useState([]);
    
 
     useEffect(() => { 
       fectchData();
     }, []);

     const fectchData = async () => {
      const data = await fetch(RESTORENTS_LIST);
 
       // https://corsproxy.io/
       const jsonData = await data.json();
       setListOfRestoRents(
         jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
           ?.restaurants
       );
     };

    return ListOfRestoRents;
    
}

export default useBody;