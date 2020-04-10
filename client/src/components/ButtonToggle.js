import React from 'react';
import useDarkMode from '../hooks/useToggleHook';

const ButtonToggle = () =>{
    const [lightMode, setLightMode] = useDarkMode(true);
    const toggleClick = e =>{
        e.preventDefault();
        setLightMode(!lightMode);
        console.log("LightMode: ",lightMode);
    }

    return(
        <div>
        <button onClick={toggleClick}>Light Mode</button>
        </div>
    )
};
export default ButtonToggle;