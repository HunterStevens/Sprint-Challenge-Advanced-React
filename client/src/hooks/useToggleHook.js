
import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

const useDarkMode = () =>{
    const [lightMode, setLightMode] = useLocalStorage("light-mode", false);
        useEffect(() =>{
            if(lightMode === true){
                document.body.classList.add("light-mode");
                console.log("Dark-Mode activated");
            }
            else{
                document.body.classList.remove("light-mode");
                console.log("Dark-Mode deactivated")
            }
        },[lightMode])
    return[lightMode, setLightMode];
}

export default useDarkMode;