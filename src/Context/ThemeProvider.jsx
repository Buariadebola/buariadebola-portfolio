import { createContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

      const [theme, setTheme] = useState('dark');
      const [clicked, setClicked] = useState(false);

      useEffect(() => {
        const storedThemeColor = localStorage.getItem(theme);
        if (storedThemeColor) {
            setTheme(storedThemeColor)
        }
      }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        localStorage.setItem(theme)
    };
            
      useEffect (() => {
        document.body.classList.toggle('light', theme === 'light');
      }, [theme]);
    
    
    const handleColor = () => {
      setClicked(! clicked)
    }

    const [sidebar, setSidebar] = useState(false);
    
    const handleSidebar = () => {
        setSidebar(! sidebar);
    }

  return (
    <ThemeContext.Provider value={{handleColor, toggleTheme, theme, clicked, sidebar, handleSidebar}}>
        {children}
    </ThemeContext.Provider>
  )
};

export {ThemeProvider, ThemeContext};
