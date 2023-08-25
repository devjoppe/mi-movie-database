import React from "react";
import {useFetchRelatedActors} from "../../hooks/useFetchRelatedActors.ts";

interface IProp {
    id: string | null
    title: string
}

const BrowseActors:React.FC<IProp> = ({id, title}) => {

    const allActors = useFetchRelatedActors(id)
    // const displayActors = allActors

    console.log("All Actors: ", allActors)

    return(
        <div>
            <h2>{title}</h2>
            Related actor ID: {id}
        </div>
    )
}

export default BrowseActors