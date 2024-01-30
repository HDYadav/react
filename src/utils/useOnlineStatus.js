import { useEffect,useState } from "react";

const useOnlineStatus = () => {

    const [onLineStatus, setOnlineStatus] = useState(true);
    
     useEffect(() => {
       window.addEventListener("offline", () => {
         //console.log("You are now connected to the network.");
         setOnlineStatus(false);
       });
     }, []);
    
    


    useEffect(() => {
        window.addEventListener("online", () => {
            //console.log("You are now connected to the network.");
            setOnlineStatus(true);
        });
        
    }, []); 

    return onLineStatus;

}

export default useOnlineStatus;