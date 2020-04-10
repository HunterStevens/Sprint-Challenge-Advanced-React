import React from 'react';
import useToggleHook from '../hooks/useToggleHook';

const ButtonToggle = () =>{
    const [lightMode, setLightMode] = useToggleHook(false);
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