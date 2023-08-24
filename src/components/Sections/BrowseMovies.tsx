import React from "react";
import {useFetchBrowseMovies} from "../../hooks/useFetchBrowseMovies.ts";

interface IProp {
    title: string,
    categoryParam: string
}

const BrowseMovies:React.FC<IProp> = ({title, categoryParam}) => {

    const recentMovies = useFetchBrowseMovies("1", categoryParam)

    console.log(recentMovies.data)

    return(
        <div>
            Browse movies
            <h2>{title}</h2>
            {categoryParam}
        </div>
    )
}

export default BrowseMovies