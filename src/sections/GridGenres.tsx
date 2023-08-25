import React, {useState} from "react";
import {useFetchGenre} from "../hooks/useFetchGenre.ts";
import {Button} from "@nextui-org/react";
import FetchError from "../components/Error/FetchError.tsx";
import GridButtons from "../components/Buttons/GridButtons.tsx";

interface IProp {
    title: string
}

const GridGenres:React.FC<IProp> = ({title}) => {

    const [showAllGenres, setShowAllGenres] = useState(false)

    const genres = useFetchGenre()
    const displayedGenres = showAllGenres ? genres.data?.genres : genres.data?.genres.slice(0,6)

    const toggleShowGenres = () => {
        setShowAllGenres(!showAllGenres)
    }

    return(
        <div>
            { genres.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            { genres.isSuccess && <GridButtons data={displayedGenres}/> }
            <Button onClick={toggleShowGenres}>{showAllGenres ? "Hide genres" : "Show all genres"}</Button>
        </div>
    )
}

export default GridGenres