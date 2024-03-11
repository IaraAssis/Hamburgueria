import { useEffect, useRef } from "react";

export const useOutclick = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleOutclick = (event) =>{
        
            if(ref.current && !ref.current.contains(event.target)){
                if(callback){
                    callback();

                };
            };
        };
            document.addEventListener("mousedown", handleOutclick);

        return () => {
            document.removeEventListener("mousedown", handleOutclick);
        };
    }, [])
    
    return ref;

};