import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {


  const navigate = useNavigate();

  useEffect(() => {

    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "d" ) {
          e.preventDefault();
          navigate("/")
        
      }
    };

    window.addEventListener('keydown', handleKeyDown);


    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };



  }, []);


  return (
    <>
        <h1>This is Dashboard</h1>
        <p>This page comes only in dark mode, if you like light mode here, then probably you are not developer. </p>
    </>
  );
};

export default Dashboard;