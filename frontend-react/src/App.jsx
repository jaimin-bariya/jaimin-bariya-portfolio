import { useState } from "react";
import "./App.css";
import {
  HomePage,
  Header,
  Footer,
  AboutPage,
  EducationPage,
  Experience,
  OpenSourcePage,
  ContactPage,
  ProjectPage,
  BeyondMe,
} from "@components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
import AllCertificates from "@components/EducationPage/AllCertificates";
import Publications from "@components/ProjectPage/Publications";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {/* Layout compo wraps the routes  */}
            {/* <Route element={<Layout/>}> */}

            <Route path="/" element={<HomePage />} />

            <Route path="/home" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/education/" element={<EducationPage />} />

            <Route
              path="/education/certificate/"
              element={<AllCertificates />}
            />

            <Route path="/projects/" element={<ProjectPage />}></Route>

            <Route path="/opensource" element={<OpenSourcePage />} />
            <Route path="/contact-me" element={<ContactPage />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/beyond-me" element={<BeyondMe />} />

            {/* </Route> */}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
