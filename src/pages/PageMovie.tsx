import {useParams} from "react-router-dom";
import {Image} from "@nextui-org/react";
import GridMovies from "../sections/GridMovies.tsx";
import FetchError from "../components/Error/FetchError.tsx";
import GridActors from "../sections/GridActors.tsx";
import {useFetchMovieActor} from "../hooks/useFetchMovieActor.ts";
import GridButtons from "../components/Buttons/GridButtons.tsx";
import {genreInt} from "../interfaces/genres.interface.ts";
import {useEffect, useState} from "react";
import {movieInt} from "../interfaces/movie.interface.ts";

const PageMovie = () => {

    const { id } = useParams()
    const movieQuery  = id ? useFetchMovieActor(id, "movie") : null

    const [movie, setMovie] = useState<movieInt | null>(null)
    const [movieGenres, setMovieGenres] = useState<genreInt[] | null>(null)

    useEffect(() => {
        if(movieQuery != null && movieQuery.data)
            setMovie((movieQuery.data as movieInt))
            if(movie != null) {
                setMovieGenres(movie.genres)
            }
    }, [movieQuery]);

    console.log("movie data: ", movieQuery)

    // TODO: Use the backdrop image for the design

    return (
        <>
            { movieQuery && movieQuery?.isError ? <FetchError /> : null }
            { movieQuery && movieQuery.isSuccess && movie && (
                <div>
                    <div>
                        <div>
                            <Image
                                alt={`Image background for ${movie.title}`}
                                className="object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            />
                        </div>
                        <div>
                            <h2>{movie.title}</h2>
                            <span>{movie.tagline}</span>
                            <div><span>{movie.release_date}</span></div>
                            <div><span>{movie.runtime} min</span></div>
                        </div>
                        <div>
                            <a href={`https://www.imdb.com/title/${movie.imdb_id}/`} aria-label={`Visit ${movie.title} on IMDB`} target="_blank">Visit {movie.title} on IMDB</a>
                        </div>
                    </div>
                    <div>
                        {movie.overview}
                    </div>
                    <div>
                        <GridButtons data={movieGenres}/>
                    </div>
                    <div>
                        <GridActors title={"Actors"} id={id ? id.toString() : null} />
                    </div>
                    <div>
                        <GridMovies title={"Related movies"} identifier={id ? id.toString() : null} option={"similar"} />
                    </div>
                </div>
            )}
        </>
    )
}

export default PageMovie