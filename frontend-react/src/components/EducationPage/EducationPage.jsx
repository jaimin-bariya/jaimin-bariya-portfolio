import { AllCertificates, Certification, Degree } from "@components/index";

const EducationPage = () => {
  return (
    <>
      <div className="flex gap-4 justify-between px-9">
        <Degree />
        <Certification />
      </div>
    </>
  );
};

export default EducationPage;
