import React from "react";
import ImageCard from "../components/Cards/ImageCard.tsx";
import {browseMovieInt} from "../interfaces/movies.interface.ts";

interface IProp {
    data: browseMovieInt[]
}

const ListMovies:React.FC<IProp> = ({data}) => {

    return(
        <div className="md-list-movies w-full">
            {data && data.map(movie => (
                movie.poster_path != null &&
                    <ImageCard key={movie.title+movie.id} data={movie} />
            ))}
        </div>
    )
}

export default ListMovies