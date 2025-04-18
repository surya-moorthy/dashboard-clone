import { useState,useEffect,createContext } from "react"
import PropsTypes from "prop-types";
const initialState = {
    theme: "system",
    setTheme: () => null,
  }
   
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeProviderContext = createContext(initialState)
   
  export function ThemeProvider({
    children,
    defaultTheme = "system",
    storageKey = "vite-ui-theme",
    ...props
  }) {
    const [theme, setTheme] = useState(
      () => (localStorage.getItem(storageKey)) || defaultTheme
    )
   
    useEffect(() => {
      const root = window.document.documentElement
   
      root.classList.remove("light", "dark")
   
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light"
   
        root.classList.add(systemTheme)
        return
      }
   
      root.classList.add(theme)
    }, [theme])
   
    const value = {
      theme,
      setTheme: (theme) => {
        localStorage.setItem(storageKey, theme)
        setTheme(theme)
      },
    }
   
    return (
      <ThemeProviderContext.Provider {...props} value={value}>
        {children}
      </ThemeProviderContext.Provider>
    )
  }
   
ThemeProvider.propTypes = {
    children: PropsTypes.node.isRequired,
    defaultTheme: PropsTypes.string,
    storageKey: PropsTypes.string,
}
