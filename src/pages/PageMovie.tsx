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
import {browseMovieInt} from "../interfaces/movies.interface.ts";
import GridRecentVisited from "../sections/GridRecentVisited.tsx";

const PageMovie = () => {

    const { id } = useParams()
    const movieQuery  = id ? useFetchMovieActor(id, "movie") : null

    const [movie, setMovie] = useState<movieInt | null>(null)
    const [movieGenres, setMovieGenres] = useState<genreInt[] | null>(null)

    let getLastVisited:browseMovieInt[] = JSON.parse(localStorage.getItem("MDMovies") || "[]");

    useEffect(() => {
        if(movieQuery !== null && movieQuery.data) {
            setMovie((movieQuery.data as movieInt))
        }
    }, [movieQuery]);

    useEffect(() => {
        if(movie != null) {
            setMovieGenres(movie.genres)
            let storeListVisisted = getLastVisited.filter(item => item.id != movie.id)
            storeListVisisted.push({
                id: movie.id!,
                title: movie.title,
                poster_path: movie.poster_path,
            })

            localStorage.setItem("MDMovies", JSON.stringify(storeListVisisted))
        }
    }, [movie]);

    return (
        <>
            { movieQuery && movieQuery?.isError ? <FetchError /> : null }
            { movie &&
                <div className="w-full">
                    <div className="flex mb-movie">
                        <div>
                            <Image
                                alt={`Image background for ${movie.title}`}
                                className="object-cover rounded-md md-movie-page-image"
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                            />
                        </div>
                        <div className="flex mb-movie-info">
                            <div className="flex flex-col mb-movie-info-data">
                                <h1 className="md-movie-h1">{movie.title}</h1>
                                <span className="md-tag-line text-slate-400">{movie.tagline}</span>
                                <span>{movie.release_date}</span>
                                <span>{movie.runtime} min</span>
                            </div>
                            <div className="md-movie-overview">
                                {movie.overview}
                            </div>
                            <div className="flex mb-8">
                                <a className="md-imdb-link bg-amber-400 text-slate-900 rounded-md p-2 px-4 mt-4" href={`https://www.imdb.com/title/${movie.imdb_id}/`} aria-label={`Visit ${movie.title} on IMDB`} target="_blank">Visit {movie.title} on IMDB</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Genres</h2>
                        <GridButtons data={movieGenres}/>
                        <div>
                            <h2>{movie.title} actors</h2>
                            <GridActors url={"movie"} identifier={id ? id.toString() : null} option={["credits"]} useRelated={false} />
                        </div>
                        <div>
                            <h2>Similar movies</h2>
                            <GridMovies url={"movie/"} identifier={id ? id.toString() : null} option={["similar"]} useRelated={false} />
                        </div>
                        <div>
                            <h3>My recent visited movies</h3>
                            <GridRecentVisited />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PageMovie