import {useParams} from "react-router-dom";

const PageMovie = () => {

    const { id } = useParams()

    console.log("What ID: ", id)

    return (
        <>
            <div>
                <div>
                    <div>
                        IMAGE
                    </div>
                    <div>
                        Basic Data
                    </div>
                </div>
                <div>
                    ACTORS/Credits
                </div>
            </div>
            <div>
                <div>
                    Related movies
                </div>
            </div>
        </>
    )
}

export default PageMovie