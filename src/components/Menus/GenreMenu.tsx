import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetchGenre} from "../../hooks/useFetchGenre.ts";
import {genreInt} from "../../interfaces/genres.interface.ts";

const GenreMenu = () => {

    const location = useLocation()

    const [isVisible, setIsVisible] = useState(false)
    const [genres, setGenres] = useState<genreInt[] | null>(null)
    const getGenres = useFetchGenre()

    useEffect(() => {
        if(location.pathname !== '/') {
            setIsVisible(true)
            if(getGenres.data) {
                setGenres(getGenres.data.genres)
            }
        } else {
            setIsVisible(false)
        }
    }, [location]);

    return(
        <div>
            {isVisible &&
                <>
                    <div>
                        Go Back button
                    </div>
                    <div>
                        {genres && genres.map(genre => (
                            <span>{genre.name}</span>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default GenreMenu