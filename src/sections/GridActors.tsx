import React from "react";
import {useFetchRelatedActors} from "../hooks/useFetchRelatedActors.ts";
import ImageAvatar from "../components/Avatars/ImageAvatar.tsx";

interface IProp {
    id: string | null
    title: string
}

const GridActors:React.FC<IProp> = ({id, title}) => {

    const allActors = useFetchRelatedActors(id)
    const displayActors = allActors.data?.cast.slice(0,15)

    return(
        <div>
            <h2>{title}</h2>
            <div className="flex overflow-x-auto gap-x-6">
                { displayActors && displayActors.map(actor => (
                    <div key={actor.id} className="flex flex-col  gap-4 items-center">
                        <ImageAvatar key={actor.id} data={actor} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridActors