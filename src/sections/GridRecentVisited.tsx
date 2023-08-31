import {browseMovieInt} from "../interfaces/movies.interface.ts";
import ImageCard from "../components/Cards/ImageCard.tsx";

const GridRecentVisited = () => {

    let localVisited: browseMovieInt[] = JSON.parse(localStorage.getItem("MDMovies") || "[]")

    if(localVisited.length > 10 ) {
        localVisited.pop()
    }

    console.log("Local storage: ", localVisited)

    return(
        <div>
            {localVisited.length !== 0 ? localVisited.map(movie => (
                <ImageCard key={movie.id} data={movie} />
            ))
            : <span>You have not visited any movies yet...</span>}
        </div>
    )
}

export default GridRecentVisited