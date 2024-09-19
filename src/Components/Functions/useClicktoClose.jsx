import { useRef, useEffect } from 'react'


const useClicktoClose = (handler) => {

    const clickOutRef = useRef();


    useEffect(() => {
      const closeHandler = (e) => {
        if (clickOutRef.current && !clickOutRef.current.contains(e.target)) {
            handler();
        }
      };
    
      document.addEventListener("mousedown", closeHandler);
    
      return () => {
        document.removeEventListener("mousedown", closeHandler);
      };
    }, );
    return clickOutRef;
}

export default useClicktoClose