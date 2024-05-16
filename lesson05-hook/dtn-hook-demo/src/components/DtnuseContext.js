import React, { createContext, useContext, useState } from 'react'
import DtnuseContext1 from './DtnuseContext1';
export const ThemeContext = createContext();

export default function DtnuseContext() {
 const [theme,setTheme] = useState('red');
    const dtnHandleChange = (toggle)=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value = {theme}>
        <div className='alert'>
            <h2>Demo useContext</h2>
            <DtnuseContext1 />
            <button onClick={dtnHandleChange}>Change bgColor</button>
        </div>
    </ThemeContext.Provider>
  )
}
