import { GitHubLogo } from "@/assets/images";

const ProjectFeature = ({feat, imgLink}) => {
  return (
    <>
      <div className="border-2 rounded-md overflow-hidden  py-2 ">
          <h2 className=" border-b-2 p-2">
            {feat}
          </h2>
          {imgLink && (
            <div className="p-2 divide-y-2 ">
            <img src={imgLink} alt="" className="w-full h-auto" />
          </div>
          )}
        </div>
    </>
  );
};

export default ProjectFeature;