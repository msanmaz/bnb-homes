import React, { createContext, useState,useEffect } from 'react'



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
      const [view, setView] = useState(() => {
        if (typeof window !== 'undefined') {
          const value = window.localStorage.getItem("view") === "" && '';
    
          return value === undefined ? 'dark' : value
        }
      });


    useEffect(() => {
      localStorage.setItem('theme','dark')
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

        const toggleAdminChange = React.useCallback((param)=>{
          localStorage.setItem("view", `${param}`); 
          setView(param); 
        },[view,setView])
          

        return (
            <DarkModeContext.Provider value={{
                toggleThemeChange,
                isDark,
                view,
                setView,
                toggleAdminChange
            }}>
                {children}
            </DarkModeContext.Provider>
        )
    }


export { DarkModeContext, DarkModeProvider }