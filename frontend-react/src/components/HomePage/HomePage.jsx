import { useNavigate } from "react-router-dom";


const HomePage = () => {
  
  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate('/about')
  }

  return (
    <>
      <p>Hello Homepage</p>
      <button onClick={handleNavigate} >About</button>
    </>
  );
};

export default HomePage;