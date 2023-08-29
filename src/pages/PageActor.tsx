import {useParams} from "react-router-dom";
import {useFetchMovieActor} from "../hooks/useFetchMovieActor.ts";
import {useEffect, useState} from "react";
import {actorInt} from "../interfaces/actors.interface.ts";
import FetchError from "../components/Error/FetchError.tsx";
import ImageAvatar from "../components/Avatars/ImageAvatar.tsx";
import {imageAvtarInt} from "../components/Avatars/imageAvatar.interface.ts";

const PageActor = () => {

    const { id } = useParams()
    const actorQuery = id ? useFetchMovieActor(id, "person") : null

    const [actor, setActor] = useState<actorInt | null>(null)
    const [avatarInfo, setAvatarInfo] = useState<imageAvtarInt | null>(null)

    useEffect(() => {
        if(actorQuery) {
            setActor((actorQuery.data as actorInt))
            if(actor) {
                setAvatarInfo({
                    name: actor.name as string,
                    profile_path: actor.profile_path as string
                })
            }
        }
    }, [actorQuery?.data, actor]);

    console.log("Actor: ", actor)
    console.log("ActorQuery: ", actorQuery)

    return (
        <>
            { actorQuery && actorQuery?.isError ? <FetchError /> : null }
            { actorQuery && actorQuery.isSuccess && actor && avatarInfo &&
                <div className="flex items-center flex-col">
                    <ImageAvatar data={avatarInfo} displayData={false} size={"44"} />
                    <h1>{actor.name}</h1>
                    <span>{actor.known_for_department}</span>
                    <div>
                        <a href={`https://www.imdb.com/name/${actor.imdb_id}`} target="_blank" aria-label={actor.name} >Profile on IMDB</a>
                    </div>
                    <div>
                        {actor.biography}
                    </div>
                    <div>
                        <h3></h3>
                    </div>
                </div>
            }
        </>
    )
}

export default PageActor