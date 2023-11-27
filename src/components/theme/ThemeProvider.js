import {useState} from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {
      const [theme, setTheme] = useState({
        backgroundColor: "#ebecff",
        color: "#0f3057"
      })
      const [themeColor, setThemeColor] = useState({
        backgroundColor: "#d0d1e2",
        color: "#0f3057"
      })
const toggleTheme =   () => {
    const newTheme = 
    theme.backgroundColor === "#ebecff"
      ? { backgroundColor: "black", color: "#00ff08"} :
        { backgroundColor: "#ebecff", color: "#0f3057"}
    const newThemeColor =
    themeColor.backgroundColor === "#d0d1e2" 
      ? { backgroundColor: "black", color: "#00ff08"} :
        { backgroundColor: "#d0d1e2", color: "#0f3057"}
        setThemeColor(newThemeColor)
        setTheme(newTheme);
    
}
    return (<ThemeContext.Provider value={{theme,themeColor, toggleTheme, }}>
               {children}
    </ThemeContext.Provider>)
}
export default ThemeProvider;