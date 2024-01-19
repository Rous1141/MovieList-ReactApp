import React from 'react'
import { useState, useEffect } from 'react'
import alimari from '../Alimari.png'
import reimari from '../Reimari.jpg'
const themes = {
       dark: {
              backgroundColor: 'black',
              color: 'white',
              borderColor: 'darkred',
              backgroundImage: `url(${alimari})`,
              background: 'linear-gradient(120deg, rgba(0,0,0,0.9) 0%, rgba(110,110,110,0.9) 50%, rgba(0,0,0,0.9) 100%)',
              transition: 'all 1s ease-in-out',
       },
       light: {
              backgroundColor: 'floralwhite',
              color: 'black',
              borderColor: '#00ff66',
              backgroundImage: `url(${reimari})`,
              background: 'linear-gradient(130deg, rgba(255,255,255,1) 0%, rgba(143,143,143,0.8) 50%, rgba(255,255,255,1) 100%)',
              transition: 'all 1s ease-in-out',
       }
}
const initialState = {
       dark: false,
       theme: themes.light,
       toggle: () => {}
}
const ThemeContext = React.createContext(initialState)

function ThemeProvider({ children }) {
       const [dark, setDark] = useState(false) 
       // On mount, read the preferred theme from the persistence
       useEffect(() => {
              const isDark = localStorage.getItem('dark') === 'true'
//store the state mode to the local storage
              setDark(isDark)
       }, [dark])
       // To toggle between dark and light modes
       const toggle = () => {
              const isDark = !dark
              localStorage.setItem('dark', JSON.stringify(isDark))
              setDark(isDark)
       }
       const theme = dark ? themes.dark : themes.light
       return (
              <ThemeContext.Provider value={{ theme, dark, toggle }}>
                     {children}
              </ThemeContext.Provider>
       )
}
export { ThemeProvider, ThemeContext }
