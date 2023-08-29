import {useParams} from "react-router-dom";
import {useFetchMovieActor} from "../hooks/useFetchMovieActor.ts";
import {useEffect, useState} from "react";
import {actorInt} from "../interfaces/actors.interface.ts";
import FetchError from "../components/Error/FetchError.tsx";
import ImageAvatar from "../components/Avatars/ImageAvatar.tsx";
import {imageAvtarInt} from "../components/Avatars/imageAvatar.interface.ts";
import GridMovies from "../sections/GridMovies.tsx";

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
                    id: actor.id as number,
                    name: actor.name as string,
                    profile_path: actor.profile_path as string
                })
            }
        }
    }, [actorQuery?.data, actor]);

    return (
        <>
            { actorQuery?.isError ? <FetchError /> : null }
            { actorQuery && actorQuery.isSuccess && actor && avatarInfo &&
                <div>
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
                    </div>
                    <div>
                        <GridMovies title={"Actor in"} url={"person/"} identifier={actor.id.toString()} option={["movie_credits"]} useRelated={true} />
                    </div>
                </div>
            }
        </>
    )
}

export default PageActor