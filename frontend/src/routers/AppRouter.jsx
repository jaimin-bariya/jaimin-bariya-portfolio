/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import DashBoardLayout from "@/layouts/DashBoardLayout";
import {
  Experience,
  About,
  Projects,
  Home,
  Articles,
  Compete,
  Dashboard,
  ScreenTimeChronicleFullPage,
  MyBucketList,
  Mentors,
  StartPy,
  MyJourney,
  ConnectPeople,
  JSObjectEditor,
  EducationPage,
  FourTierMastery,
  SingleProjectShowCase,
  MasterTechChild,
  GitHubDevHubRepos,
  MyThought,
} from "@pages/index";

const AppRouter = () => {
  const ADMIN_DASHBOARD_URL = import.meta.env.VITE_ADMIN_DASHBOARD_URL;

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
          <Route path="/education" element={<EducationPage />} />
          <Route path="/compete" element={<Compete />} />
          {/* Sub Pages  */}
          <Route
            path="project/:projectId"
            element={<SingleProjectShowCase />}
          />{" "}
          {/* Dynamic route */}
          {/* Miscellaneous */}
          <Route
            path="/Screen-Time-Chronicles"
            element={<ScreenTimeChronicleFullPage />}
          />
          <Route path="/North-Stars" element={<Mentors />} />
          <Route path="/Thought-orbit" element={<MyThought />} />
          <Route path="/Startup-py" element={<StartPy />} />
          <Route path="/My-Bucket-List" element={<MyBucketList />} />
          <Route path="/my-journey" element={<MyJourney />} />
          <Route path="/connect" element={<ConnectPeople />} />
          <Route path="/Four-Tier-Mastery" element={<FourTierMastery />} />
          <Route path="/Tech-Child-Mastery" element={<MasterTechChild />} />
          <Route path="/GitHub-DevHub-Repos" element={<GitHubDevHubRepos />} />
        </Route>

        <Route element={<DashBoardLayout />}>
          <Route path={ADMIN_DASHBOARD_URL} element={<Dashboard />} />
          <Route
            path={`${ADMIN_DASHBOARD_URL}/editor`}
            element={<JSObjectEditor />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
