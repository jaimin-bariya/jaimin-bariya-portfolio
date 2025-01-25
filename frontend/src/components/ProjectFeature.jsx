/** @format */

const ProjectFeature = ({ feat, imgLink }) => {
  return (
    <>
      <div className="border-2 rounded-md overflow-hidden  ">
        <h2 className=" border-b-2 p-2">{feat}</h2>
        {imgLink && (
          <div className="p-2  ">
            <img
              src={imgLink}
              alt="jaimin bariya"
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectFeature;
