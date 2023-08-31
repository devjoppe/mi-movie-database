import React, {useEffect, useState} from "react";
import {useFetchGenre} from "../hooks/useFetchGenre.ts";
import {Button} from "@nextui-org/react";
import FetchError from "../components/Error/FetchError.tsx";
import GridButtons from "../components/Buttons/GridButtons.tsx";
import {genreInt} from "../interfaces/genres.interface.ts";

interface IProp {
    title: string
}

const MenuGenres:React.FC<IProp> = ({title}) => {

    const [showAllGenres, setShowAllGenres] = useState(false)
    const [displayGenres, setDisplayGenres] = useState<genreInt[] | null>(null)

    const genres = useFetchGenre()

    useEffect(() => {
        if (genres.data) {
            showAllGenres ? setDisplayGenres(genres.data.genres) : setDisplayGenres(genres.data.genres.slice(0,6))
        }
    }, [genres.data, showAllGenres]);

    const toggleShowGenres = () => {
        setShowAllGenres(!showAllGenres)
    }

    return(
        <div>
            { genres.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            { genres && <GridButtons data={displayGenres}/> }
            <Button onClick={toggleShowGenres}>{showAllGenres ? "Hide genres" : "Show all genres"}</Button>
        </div>
    )
}

export default MenuGenres