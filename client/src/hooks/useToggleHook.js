import {useEffect, useState} from 'react';
import {useLocalStorage} from './useLocalStorage'


const useToggleHook = (key) =>{
    const [someValue, setSomeValue] = useLocalStorage(key);

    useEffect(() =>{
        if(someValue === "true"){
            // document.h6.classList.remove("cardHide");
            document.body.classList.add("lightMode");

            // document.p.classList.remove("cardHide");
            // document.p.classList.add("cardShow");

            console.log("CardShow Activated")
        }
        else if(someValue === "false"){
            document.body.classList.remove("lightMode");
            // document.body.classList.add("cardHide");

            // document.p.classList.remove("cardShow");
            // document.p.classList.add("cardHide");

            console.log("CardHide Activated")
        }
    }, [setSomeValue]);
    return[someValue, setSomeValue];
}

export default useToggleHook;