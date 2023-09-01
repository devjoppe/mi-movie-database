import React, {useEffect, useState} from "react";
import {useFetchBrowseMovies} from "../hooks/useFetchBrowseMovies.ts";
import FetchError from "../components/Error/FetchError.tsx";
import ImageCard from "../components/Cards/ImageCard.tsx";
import {allRelatedMoviesInt, browseAllMoviesInt} from "../interfaces/movies.interface.ts";
import {useFetchRelatedMovieActors} from "../hooks/useFetchRelatedMovieActors.ts";
import {gridInt} from "../interfaces/grid.interface.ts";

interface IProp extends gridInt {}

const GridMovies:React.FC<IProp> = ({url, identifier, option, useRelated}) => {

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
        <div className="relative md-section md-section-grid-movies">
            { movies && movies.isError ? <FetchError /> : null }
            { movies &&
                <div className="flex flex-row overflow-x-scroll gap-x-6 w-full">
                    { !useRelated
                    ? movies?.results.slice(0,30).map(movieItem => (
                        movieItem.poster_path != null &&
                            <ImageCard key = {movieItem.id} data = {movieItem}/>
                    ))
                    : relatedMovies?.cast.slice(0,30).map(movieItem => (
                        movieItem.poster_path != null &&
                            <ImageCard key={movieItem.id} data={movieItem} />
                    ))
                    }
                </div>
            }
        </div>
    )
}

export default GridMovies