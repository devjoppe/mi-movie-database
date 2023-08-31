import React, {useEffect, useState} from "react";
import {useFetchRelatedMovieActors} from "../hooks/useFetchRelatedMovieActors.ts";
import ImageAvatar from "../components/Avatars/ImageAvatar.tsx";
import {gridInt} from "../interfaces/grid.interface.ts";
import {allRelatedActorsInt} from "../interfaces/actors.interface.ts";

interface IProp extends gridInt {}

const GridActors:React.FC<IProp> = ({url, identifier, option}) => {

    const getActors = useFetchRelatedMovieActors(url, identifier, option!)

    const[actors, setActors] = useState<allRelatedActorsInt | null>(null)

    useEffect(() => {
        if(getActors) {
            setActors((getActors.data as allRelatedActorsInt))
        }
    }, [getActors]);

    return(
        <div>
            <div className="flex overflow-x-auto gap-x-6">
                { actors && actors.cast.slice(0, 20).map(actor => (
                    <div key={actor.id+actor.character!} className="flex flex-col  gap-4 items-center">
                        <ImageAvatar data={actor} displayData={true} size={"28"}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GridActors