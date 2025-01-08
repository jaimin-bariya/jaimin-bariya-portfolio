import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {Experience, About, Projects, Home, Articles, Compete, Dashboard} from "@pages/index"

const AppRouter = () => {





  return (
    <Router>

        <Routes>

          {/* Define MainLayout as a parent route */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/compete" element={<Compete />} />
            

            <Route path="/connect" element={<Compete />} />
            <Route path="/my-journey" element={<Compete />} />
            <Route path="/my-bucket-list" element={<Compete />} />
            
            {/* Miscellaneous */}
            <Route path="/toolbox" element={<Compete />} />
          </Route>

            <Route path="/admin/dashboard" element={<Dashboard/>} />
            
        </Routes>

    </Router>
  );
};

export default AppRouter;