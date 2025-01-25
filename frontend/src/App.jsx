/** @format */

import { ThemeProvider } from "./contexts/ThemeContext";
import AppRouter from "./routers/AppRouter";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
