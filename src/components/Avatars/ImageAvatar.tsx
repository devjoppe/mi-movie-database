import {FaCamera} from "react-icons/fa";
import {Avatar} from "@nextui-org/react";
import React from "react";
import {imageAvtarInt} from "./imageAvatar.interface.ts";
import {useNavigate} from "react-router-dom";

interface IProp {
    data: imageAvtarInt,
    displayData: boolean
}

const ImageAvatar:React.FC<IProp> = ({data, displayData}) => {

    const navigate = useNavigate()

    return(
        <div>
            <Avatar
                className={`text-large md-avatars-list`}
                name={data.name}
                src={`https://image.tmdb.org/t/p/w300${data.profile_path}`}
                showFallback
                fallback={
                    <FaCamera/>
                }
                onClick={() => navigate("/actor/"+data.id)}
            />
            { displayData && (
                <div className="flex flex-col w-full items-center text-center">
                    <span className="font-bold">{data.name}</span>
                    <span className="text-sm">{data.character}</span>
                </div>
            )}
        </div>
    )
}

export default ImageAvatar