import React from "react";
import {useFetchRelatedActors} from "../hooks/useFetchRelatedActors.ts";
import {Avatar} from "@nextui-org/react";
import {FaCamera} from 'react-icons/fa'

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
                        <Avatar
                            className="w-28 h-28 text-large"
                            name={actor.name}
                            src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                            showFallback
                            fallback={
                                <FaCamera/>
                            }
                        />
                        <span>{actor.name}</span>
                        <span>{actor.character}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridActors