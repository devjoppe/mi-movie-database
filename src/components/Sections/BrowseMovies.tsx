import React from "react";
import {useFetchBrowseMovies} from "../../hooks/useFetchBrowseMovies.ts";
import {Card, Image} from "@nextui-org/react";
import FetchError from "../Error/FetchError.tsx";
import {useNavigate} from "react-router-dom";

interface IProp {
    title: string,
    categoryParam: string
}

const BrowseMovies:React.FC<IProp> = ({title, categoryParam}) => {

    // For the moment I will only use Page 1. If I want to paginate, then use a variable.
    const allMovies = useFetchBrowseMovies("1", categoryParam)
    const displayMovies = allMovies.data?.results.slice(0,10)

    const navigate = useNavigate()

    return(
        <div className="relative">
            { allMovies.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            <div className="flex flex-row overflow-x-auto gap-x-6">
                { allMovies.isSuccess && allMovies &&  displayMovies!.map(movie => (
                    <Card key={movie.id} className="w-36 flex-shrink-0">
                        <Image
                            alt={`Image background for ${movie.title}`}
                            className="object-cover rounded-md"
                            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            width={150}
                            onClick={() => navigate("/movie/"+movie.id)}
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default BrowseMovies