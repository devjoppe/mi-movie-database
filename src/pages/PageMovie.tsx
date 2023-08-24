import {useParams} from "react-router-dom";
import {useFetchMovieActor} from "../hooks/useFetchMovieActor.ts";

const PageMovie = () => {

    const { id } = useParams()

    const movie = id ? useFetchMovieActor(id, "movie") : null

    console.log("What movie: ", movie)

    return (
        <>
            <div>
                <div>
                    <div>
                        IMAGE
                    </div>
                    <div>
                        Basic Data
                    </div>
                </div>
                <div>
                    ACTORS/Credits
                </div>
            </div>
            <div>
                <div>
                    Related movies
                </div>
            </div>
        </>
    )
}

export default PageMovie