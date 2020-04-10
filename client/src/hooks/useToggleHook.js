import {useEffect, useState} from 'react';

export const useToggleHook = (key) =>{
    const [someValue, setSomeValue] = useState(key);

    useEffect(() =>{
        if(someValue === true){
            // document.h6.classList.remove("cardHide");
            document.body.classList.add("lightMode");

            // document.p.classList.remove("cardHide");
            // document.p.classList.add("cardShow");

            console.log("CardShow Activated")
        }
        else{
            document.body.classList.remove("lightMode");
            // document.body.classList.add("cardHide");

            // document.p.classList.remove("cardShow");
            // document.p.classList.add("cardHide");

            console.log("CardHide Activated")
        }
    }, [setSomeValue]);
    return[someValue, setSomeValue];
}