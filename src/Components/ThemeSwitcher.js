import React, {useContext} from 'react';
import Context from '../Context'
import AppTheme from '../Colors';

const ThemeSwitcher = () => {
    const [themeMode, setThemeMode] = useContext(Context);
    const theme = useContext(Context)[0]
    const currentTheme = AppTheme[theme];
    return (
        <button
        style={{
            backgroundColor: `${currentTheme.textColor}`,
            padding: "10px 150px",
            fontSize: "20px",
            color: `${currentTheme.backgroundColor}`,
            border:`${currentTheme.border}`
        }}
       onClick={() => {
           setThemeMode(themeMode === "light" ? "dark" : "light")
       }}
       >
        {themeMode === "light" ? "Switch on to Dark mode..!" : "Switch on to Light mode..!"}

       </button>
    )
}

export default ThemeSwitcher;