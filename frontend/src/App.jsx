import { ThemeProvider} from './contexts/ThemeContext'
import AppRouter from './routers/AppRouter'
import './App.css'
import { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { isDevToolOpen } from './utils/PureFunctions'

function App() {



  
  return (
    <ThemeProvider>
      <AppRouter/>
    </ThemeProvider>
  )
}

export default App
