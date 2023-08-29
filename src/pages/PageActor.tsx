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
        if(actorQuery != null && actorQuery.data) {
            setActor((actorQuery.data as actorInt))
            if(actor) {
                setAvatarInfo({
                    name: actor.name as string,
                    profile_path: actor.profile_path as string
                })
            }
        }
    }, [actorQuery]);

    console.log("Actor: ", actorQuery)

    return (
        <>
            { actorQuery && actorQuery?.isError ? <FetchError /> : null }
            { actorQuery && actorQuery.isSuccess && actor && avatarInfo &&
                <div>
                    <ImageAvatar data={avatarInfo} displayData={false} />
                </div>
            }
        </>
    )
}

export default PageActor