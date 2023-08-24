import React from "react";
import {useFetchBrowseMovies} from "../../hooks/useFetchBrowseMovies.ts";
import {Card, Image} from "@nextui-org/react";
import FetchError from "../Error/FetchError.tsx";

interface IProp {
    title: string,
    categoryParam: string
}

const BrowseMovies:React.FC<IProp> = ({title, categoryParam}) => {

    // For the moment I will only use Page 1. If I want to paginate, then use a variable.
    const allMovies = useFetchBrowseMovies("1", categoryParam)
    const displayMovies = allMovies.data?.results.slice(0,10)

    console.log(allMovies.data?.results)

    return(
        <div>
            { allMovies.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            { allMovies.isSuccess && allMovies &&  displayMovies!.map(movie => (
                <Card key={movie.id}>
                    <Image
                        alt={`Image background for ${movie.title}`}
                        className="object-cover rounded-md"
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        width={150}
                    />
                </Card>
            ))}
        </div>
    )
}

export default BrowseMovies