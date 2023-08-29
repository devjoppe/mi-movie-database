import React, {useEffect, useState} from "react";
import {useFetchBrowseMovies} from "../hooks/useFetchBrowseMovies.ts";
import FetchError from "../components/Error/FetchError.tsx";
import ImageCard from "../components/Cards/ImageCard.tsx";
import {allRelatedMoviesInt, browseAllMoviesInt} from "../interfaces/movies.interface.ts";
import {useFetchRelatedMovieActors} from "../hooks/useFetchRelatedMovieActors.ts";
import {gridInt} from "../interfaces/grid.interface.ts";

interface IProp extends gridInt {}

const GridMovies:React.FC<IProp> = ({title,url, identifier, option, useRelated}) => {

    const getMovies = !useRelated
        ? useFetchBrowseMovies("1", url, identifier, option != null ? option[0] : null)
        : useFetchRelatedMovieActors(url, identifier, option!)

    const [movies, setMovies] = useState<browseAllMoviesInt | null>(null)
    const [relatedMovies, setRelatedMovies] = useState<allRelatedMoviesInt | null>(null)

    useEffect(() => {
        if(!useRelated) {
            setMovies((getMovies.data as browseAllMoviesInt))
        }
        if(useRelated) {
            setRelatedMovies((getMovies.data as allRelatedMoviesInt))
        }
    }, [getMovies]);

    return(
        <div className="relative">
            { movies && movies.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            <div className="flex flex-row overflow-x-auto gap-x-6">
                { !useRelated
                ? movies?.results.map(movieItem => (
                    <ImageCard key={movieItem.id} data={movieItem} />
                ))
                : relatedMovies?.cast.map(movieItem => (
                        <ImageCard key={movieItem.id} data={movieItem} />
                ))
                }
            </div>
        </div>
    )
}

export default GridMovies