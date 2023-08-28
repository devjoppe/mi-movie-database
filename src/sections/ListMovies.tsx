import React from "react";
import ImageCard from "../components/Cards/ImageCard.tsx";
import {browseMovieInt} from "../interfaces/movies.interface.ts";

interface IProp {
    data: browseMovieInt[]
}

const ListMovies:React.FC<IProp> = ({data}) => {
    return(
        <div>
            {data && data.map(movie => (
                <ImageCard data={movie} />
            ))}
        </div>
    )
}

export default ListMovies