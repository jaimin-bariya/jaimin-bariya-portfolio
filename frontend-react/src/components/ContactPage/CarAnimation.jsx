const CarAnimation = () => {
  return (
    <>
      {/* Moving Area  */}
      <div className="flex justify-between px-14">
        <div className="flex">
          <img
            className=" z-10"
            width="50px "
            src="/images/contact/pillar.png"
          />

          <img width="50px " src="/images/contact/pillar.png" />
        </div>

        <div className="relative flex items-center">
          <img
            className="mt-[36px] mx-auto animate-moveButak "
            width="100px"
            src="/gifs/car.gif"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default CarAnimation;
