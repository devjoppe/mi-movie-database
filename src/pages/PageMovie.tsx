import {useParams} from "react-router-dom";
import {Image} from "@nextui-org/react";
import GridMovies from "../sections/GridMovies.tsx";
import FetchError from "../components/Error/FetchError.tsx";
import GridActors from "../sections/GridActors.tsx";
import {useFetchMovieActor} from "../hooks/useFetchMovieActor.ts";

const PageMovie = () => {

    const { id } = useParams()
    const movieQuery = id ? useFetchMovieActor(id, "movie") : null

    console.log("movie data: ", movieQuery!.data)

    // TODO: Use the backdrop image for the design

    return (
        <>
            { movieQuery?.isError ? <FetchError /> : null }
            { movieQuery && movieQuery.isSuccess && (
                <div>
                    <div>
                        <div>
                            <Image
                                alt={`Image background for ${movieQuery.data.title}`}
                                className="object-cover rounded-md"
                                src={`https://image.tmdb.org/t/p/w300${movieQuery.data.poster_path}`}
                            />
                        </div>
                        <div>
                            <h2>{movieQuery.data.title}</h2>
                            <span>{movieQuery.data.tagline}</span>
                            <div><span>{movieQuery.data.release_date}</span></div>
                            <div><span>{movieQuery.data.runtime} min</span></div>
                        </div>
                        <div>
                            { movieQuery.data.genres.map(movieGenre => (
                                <span key={movieGenre.id}>{movieGenre.name}</span>
                            ))}
                        </div>
                        <div>
                            <a href={`https://www.imdb.com/title/${movieQuery.data.imdb_id}/`} aria-label={`Visit ${movieQuery.data.title} on IMDB`} target="_blank">Visit {movieQuery.data.title} on IMDB</a>
                        </div>
                    </div>
                    <div>
                        {movieQuery.data.overview}
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