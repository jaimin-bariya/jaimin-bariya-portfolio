import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import {Experience, About, Projects, Home, Articles, Compete, Dashboard, ScreenTimeChronicleFullPage, MyBucketList, YTMentors, StartPy, MyJourney, ConnectPeople} from "@pages/index"
import { SingleProjectShowCase } from "@/components";
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
            

            {/* Sub Pages  */}
            <Route path="project/:projectId" element={<SingleProjectShowCase/>} /> {/* Dynamic route */}
            

            
            {/* Miscellaneous */}
            <Route path="/Screen-Time-Chronicles" element={<ScreenTimeChronicleFullPage/>} />
            <Route path="/Favorite-YT-Channels-Mentors" element={<YTMentors/> } />
            <Route path="/Startup-py" element={<StartPy />} />
            <Route path="/My-Bucket-List" element={<MyBucketList />} />
            <Route path="/my-journey" element={<MyJourney />} />
            <Route path="/connect" element={<ConnectPeople />} />
          </Route>

            <Route path="/admin/dashboard" element={<Dashboard/>} />
            
        </Routes>

    </Router>
  );
};

export default AppRouter;