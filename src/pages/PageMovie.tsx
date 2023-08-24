import {useParams} from "react-router-dom";
import {useFetchMovieActor} from "../hooks/useFetchMovieActor.ts";
import {Image} from "@nextui-org/react";

const PageMovie = () => {

    const { id } = useParams()
    const movieQuery = id ? useFetchMovieActor(id, "movie") : null

    console.log("movie data: ", movieQuery!.data)

    return (
        <>
            {movieQuery && movieQuery.isSuccess && (
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
                            <div><span>{movieQuery.data.runtime}</span></div>
                        </div>
                        <div>
                            Get the genres - Get the data from the cache?
                            { movieQuery.data.genres.map(movieGenre => (
                                <span key={movieGenre.id}>{movieGenre.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        ACTORS/Credits
                    </div>
                    <div>
                        <div>Related movies</div>
                    </div>
                </div>
            )}
        </>
    )
}

export default PageMovie