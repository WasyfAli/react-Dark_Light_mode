import React, {useContext} from 'react';
import Context from '../Context';
import AppTheme from '../Colors';
import  ThemeSwitcher from './ThemeSwitcher'




const ItsBody = () => {

    //const theme = useContext(Context)[0]
    const theme = useContext(Context)[0]
    const currentTheme = AppTheme[theme];


    return(
        <div 
        style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign:"center"
        }}
        >
            <h1>ContextAPI Theme Switcher</h1>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            <ThemeSwitcher />
            
        </div>
    )
}
export default ItsBody; 