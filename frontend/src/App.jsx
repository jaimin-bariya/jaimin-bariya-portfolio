import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import { Button } from './components/ui/button'
import { Grid, Menu, Moon, Sun } from 'lucide-react'
import { Navbar } from '@components/index'
import AppRouter from './routers/AppRouter'
import './App.css'

function App() {

  const {theme, setTheme} = useTheme();

  return (
    <ThemeProvider>
      <AppRouter/>
    </ThemeProvider>
  )
}

export default App
