import { MovieShowCard } from "@/components";


const ScreenTimeChronicles = ({numberOfMovieCardShow = 999, ScreenTimeFile = []}) => {





  return (
    <>
      <div>
        
        <div className="grid sm:grid-cols-3 gap-6 items-baseline">
        {ScreenTimeFile
        .slice(0, numberOfMovieCardShow)
        .map((movie, index) => (
            <MovieShowCard key={index} movie={movie}/>
        ))}
        </div>

      </div>
    </>
  );
};

export default ScreenTimeChronicles;