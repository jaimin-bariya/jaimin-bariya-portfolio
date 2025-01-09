import { MovieShowCard } from "@/components";


const ScreenTimeChronicles = ({numberOfMovieCardShow = 999, ScreenTimeFile = [], showMessage = false}) => {





  return (
    <>
      <div>
        
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-6 items-baseline">
        {ScreenTimeFile
        .slice(0, numberOfMovieCardShow)
        .map((movie, index) => (
            <MovieShowCard key={index} movie={movie} showMessage={showMessage}/>
        ))}
        </div>

      </div>
    </>
  );
};

export default ScreenTimeChronicles;