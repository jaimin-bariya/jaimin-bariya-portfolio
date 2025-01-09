
const MovieShowCard = ({movie}) => {



  return (
    <>
      <div>
        
            <div className="border dark:border-white border-black rounded-t-xl sm:w-60 h-auto overflow-hidden ">
            {movie['poster'] !== null && <img className="w-full h-full" src={movie['poster']} alt="" />}
            <p className=" p-4 text-center">{movie['name']}</p>
            
            </div>
        
      </div>
    </>
  );
};

export default MovieShowCard;