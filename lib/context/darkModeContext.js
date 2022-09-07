import React, { Children, createContext, useState,useEffect } from 'react'



const DarkModeContext = createContext();


function DarkModeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
          const value = window.localStorage.getItem("theme") === "dark" ? true : false;
    
          return value !== null
            ? value
            : false;
        }
      });

      
    useEffect(() => {
        document.getElementsByTagName("HTML")[0].setAttribute("data-theme", localStorage.getItem("theme"));
    },[])

    const toggleThemeChange = () => { 
        if (isDark === false) { 
          localStorage.setItem("theme", "dark"); 
          document.getElementsByTagName("HTML")[0].setAttribute("data-theme",localStorage.getItem("theme")); 
          setIsDark(true); 
          } else { 
            localStorage.setItem("theme", "light"); 
            document .getElementsByTagName("HTML")[0] .setAttribute("data-theme",localStorage.getItem("theme")); 
            setIsDark(false); 
          } 
        }

        return (
            <DarkModeContext.Provider value={{
                toggleThemeChange,
                isDark
            }}>
                {children}
            </DarkModeContext.Provider>
        )
    }


export { DarkModeContext, DarkModeProvider }