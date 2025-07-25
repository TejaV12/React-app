import React, { createContext, useState } from 'react'

export const ThemeContextProvider=createContext()
const ThemeContext = ({childern}) => {
const [theme,setTheme]=useState('dark')
const toggleTheme=()=> {
    setTheme(theme=='light' ? 'dark' : 'light')

}
  return (
   
        <ThemeContextProvider value={{theme,toggleTheme}}> 
            {childern}

        </ThemeContextProvider>
     

  )
}

export default ThemeContext
