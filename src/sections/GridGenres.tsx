import React, {useState} from "react";
import {useFetchGenre} from "../hooks/useFetchGenre.ts";
import {Button} from "@nextui-org/react";
import FetchError from "../components/Error/FetchError.tsx";

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

    console.log("reLoad?")

    return(
        <div>
            { genres.isError ? <FetchError /> : null }
            <h2>{title}</h2>
            <div className="grid gap-2 grid-cols-2 grid-rows-2">
                { genres.isSuccess && displayedGenres && displayedGenres.map((genre) => (
                    <Button size="sm" key={genre.id}>{genre.name}</Button>
                ))}
            </div>
            <Button onClick={toggleShowGenres}>{showAllGenres ? "Hide genres" : "Show all genres"}</Button>
        </div>
    )
}

export default GridGenres