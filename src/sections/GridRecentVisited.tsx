import {browseMovieInt} from "../interfaces/movies.interface.ts";
import ImageCard from "../components/Cards/ImageCard.tsx";

const GridRecentVisited = () => {

    let localVisited: browseMovieInt[] = JSON.parse(localStorage.getItem("MDMovies") || "[]")
    let visitList = localVisited

    if(localVisited.length > 10) {
        localVisited.shift()
        localStorage.setItem("MDMovies", JSON.stringify(visitList))
    }

    return(
        <div className="flex flex-row overflow-x-auto gap-x-6">
            {visitList && visitList.length !== 0 ? visitList.reverse().map(movie => (
                <ImageCard key={movie.id} data={movie} />
            ))
            : <span>You have not visited any movies yet...</span>}
        </div>
    )
}

export default GridRecentVisited