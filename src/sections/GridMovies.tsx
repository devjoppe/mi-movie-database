import React from "react";
import {useFetchBrowseMovies} from "../hooks/useFetchBrowseMovies.ts";
import fetchError from "../components/Error/FetchError.tsx";
import {useNavigate} from "react-router-dom";
import ImageCard from "../components/Cards/ImageCard.tsx";

interface IProp {
    title: string,
    identifier: string | null,
    option: string | null
}

const GridMovies:React.FC<IProp> = ({title, identifier, option}) => {

    // For the moment I will only use Page 1. If I want to paginate, then use a variable.
    const allMovies =  useFetchBrowseMovies("1", identifier, option)
    const displayMovies = allMovies.data?.results.slice(0,10)

    const navigate = useNavigate()

    return(
        <div className="relative">
            { allMovies.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            <div className="flex flex-row overflow-x-auto gap-x-6">
                { allMovies.isSuccess && allMovies &&  displayMovies!.map(movie => (
                    <ImageCard key={movie.id} data={movie} />
                ))}
            </div>
        </div>
    )
}

export default GridMovies