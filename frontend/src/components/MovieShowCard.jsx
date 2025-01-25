/** @format */

const MovieShowCard = ({ movie }) => {
  return (
    <>
      <div>
        <div className="border dark:border-white border-black rounded-t-xl sm:w-60 h-fit overflow-hidden mb-8 ">
          {movie["poster"] !== null && (
            <img className="w-full h-full" src={movie["poster"]} alt="" />
          )}
          <p className=" p-4 text-center">{movie["name"]}</p>
          {movie["isMessage"] && (
            <p className="border-t-2 text-zinc-500 p-4 text-center">
              {movie["message"]}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieShowCard;
