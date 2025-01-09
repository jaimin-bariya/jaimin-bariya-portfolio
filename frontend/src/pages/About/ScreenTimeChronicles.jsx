import { MovieShowCard } from "@/components";
import { Movies } from "@/data/ScreenTimeData";

const ScreenTimeChronicles = () => {


    const MoviesWithImg = Movies.filter((movie) => movie['poster'] !== null)
    const MoviesWithoutImg = Movies.filter((movie) => movie['poster'] === null)
    const SortedMovies = [...MoviesWithImg, ...MoviesWithoutImg]

    Movies.sort((a, b) => {

        if (a['poster'] !== null && b['poster'] === null) {
            return -1 //  a, b
        
        } else if (a['poster'] === null && b['poster'] !== null) {
            return 1 // b, a
        } 

        return 0;

    }) 


  return (
    <>
      <div>
        <h2 className="text-3xl font-mono font-semibold mb-6">Screen Time Chronicles🍿📺</h2>

        <div className="grid sm:grid-cols-3 gap-6 items-baseline">
        {Movies.map((movie, index) => (
            <MovieShowCard key={index} movie={movie}/>
        ))}
        </div>

      </div>
    </>
  );
};

export default ScreenTimeChronicles;