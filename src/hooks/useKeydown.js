import { useRef, useEffect } from "react";

export const useKeydown = (keyId, callback) => {
    const ref = useRef(null);

    useEffect(() => {
    
        const handlerKeydown = (event) =>{
            if(event.key === keyId){
                if(callback){
                    callback(event);
                }
            }
        }

        window.addEventListener("keydown",handlerKeydown);

        return () =>{
            window.removeEventListener("keydown",handlerKeydown);
        }
    }, []);

    return ref;

};