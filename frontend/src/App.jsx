/** @format */

import { ThemeProvider } from "./contexts/ThemeContext";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import { useEffect } from "react";

function App() {


  useEffect(() => {
    console.log("Okay, Enjoy with your developer mode skill -----------");
    
  })

  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
