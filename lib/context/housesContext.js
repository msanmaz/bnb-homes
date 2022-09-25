import React, { createContext, useState, useEffect } from 'react'

export const SelectContext = createContext();

 function SelectProvider ({children}) {
    const [data, setData] = useState(null);

        async function fetchAPI() {
            const res = await fetch("/api/gethouses");
            const posts = await res.json();
            setData(()=> posts);
        }

    return <SelectContext.Provider value={{fetchAPI,data}}>{children}</SelectContext.Provider>;

}

export {SelectProvider}