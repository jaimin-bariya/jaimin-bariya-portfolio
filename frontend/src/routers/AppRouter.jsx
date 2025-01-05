import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {Experience, About, Projects, Home, Blog, Compete} from "@pages/index"

const AppRouter = () => {
  return (
    <Router>

        <Routes>

            {/* Routes wrapped in MainLayout */}
            <Route path="/" element={<MainLayout> <Home/> </MainLayout>}/>
            <Route path="/blog" element={<MainLayout> <Blog/> </MainLayout>}/>
            <Route path="/projects" element={<MainLayout> <Projects/> </MainLayout>}/>
            <Route path="/about-me" element={<MainLayout> <About/> </MainLayout>}/>
            <Route path="/experience" element={<MainLayout> <Experience/> </MainLayout>}/>
            <Route path="/compete" element={<MainLayout> <Compete/> </MainLayout>}/>

        </Routes>

    </Router>
  );
};

export default AppRouter;