import {FaCamera} from "react-icons/fa";
import {Avatar} from "@nextui-org/react";
import React from "react";
import {imageAvtarInt} from "./imageAvatar.interface.ts";

interface IProp {
    data: imageAvtarInt,
    displayData: boolean,
    size: string
}

const ImageAvatar:React.FC<IProp> = ({data, displayData, size}) => {

    console.log("Size of Avatar: ", size)

    return(
        <div>
            <Avatar
                className={`w-${size} h-${size}  text-large`}
                name={data.name}
                src={`https://image.tmdb.org/t/p/w300${data.profile_path}`}
                showFallback
                fallback={
                    <FaCamera/>
                }
            />
            { displayData && (
                <div>
                    <span>{data.name}</span>
                    <span>{data.character}</span>
                </div>
            )}
        </div>
    )
}

export default ImageAvatar