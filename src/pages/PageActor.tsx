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
            { actor && avatarInfo &&
                <div>
                    <div className="mb-actor-info flex md-actor">
                        <ImageAvatar data={avatarInfo} displayData={false}/>
                        <div className="actor-info-data">
                            <h1>{actor.name}</h1>
                            <div className="mt-4">
                            <span className="md-tag-line text-slate-400">{actor.known_for_department}</span>
                            </div>
                            <div>
                                <a className="bg-amber-400 text-slate-900 rounded-md p-2 px-4 mt-4 inline-block" href={`https://www.imdb.com/name/${actor.imdb_id}`} target="_blank" aria-label={actor.name} >Profile on IMDB</a>
                            </div>
                            <div className="md-actor-overview">
                                {actor.biography}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Actor in</h2>
                        <GridMovies url={"person/"} identifier={actor.id.toString()} option={["movie_credits"]} useRelated={true} />
                    </div>
                </div>
            }
        </>
    )
}

export default PageActor