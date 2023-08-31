import React from "react";
import ImageCard from "../components/Cards/ImageCard.tsx";
import {browseMovieInt} from "../interfaces/movies.interface.ts";

interface IProp {
    data: browseMovieInt[]
}

const ListMovies:React.FC<IProp> = ({data}) => {
    return(
        <div className="flex flex-wrap gap-4">
            {data && data.map(movie => (
                movie.poster_path != null &&
                    <ImageCard key={movie.title+movie.id} data={movie} />
            ))}
        </div>
    )
}

export default ListMovies