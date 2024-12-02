import { useParams } from "react-router-dom";


const SingleProjectView = () => {

    const {projectName} = useParams();

  return (
    <>
      <p>This project {projectName} details</p>
    </>
  );
};

export default SingleProjectView;