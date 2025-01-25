/** @format */

import { MovieShowCard } from "@/components";

const ScreenTimeChronicles = ({
  numberOfMovieCardShow = 999,
  ScreenTimeFile = [],
}) => {
  return (
    <>
      <div>
        {/* <div className="grid sm:grid-cols-3 auto-rows-min  grid-flow-dense grid-cols-2 gap-6 items-baseline"> */}
        <div className=" columns-2 sm:columns-3 gap-6">
          {ScreenTimeFile.slice(0, numberOfMovieCardShow).map(
            (movie, index) => (
              <MovieShowCard key={index} movie={movie} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ScreenTimeChronicles;
