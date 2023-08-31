import {browseMovieInt} from "../interfaces/movies.interface.ts";
import ImageCard from "../components/Cards/ImageCard.tsx";

const GridRecentVisited = () => {

    let localVisited: browseMovieInt[] = JSON.parse(localStorage.getItem("MDMovies") || "[]")
    const visited = localVisited.reverse()

    if(localVisited.length > 10 ) {
        localVisited.pop()
    }

    return(
        <div className="flex flex-row overflow-x-auto gap-x-6">
            {visited.length !== 0 ? visited.map(movie => (
                <ImageCard key={movie.id} data={movie} />
            ))
            : <span>You have not visited any movies yet...</span>}
        </div>
    )
}

export default GridRecentVisited