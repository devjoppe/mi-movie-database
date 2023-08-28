import {FaCamera} from "react-icons/fa";
import {Avatar} from "@nextui-org/react";
import React from "react";

interface IProp {
    data: T
}

const ImageAvatar:React.FC<IProp> = ({data}) => {
    return(
        <div>
            <Avatar
                className="w-28 h-28 text-large"
                name={data.name}
                src={`https://image.tmdb.org/t/p/w300${data.profile_path}`}
                showFallback
                fallback={
                    <FaCamera/>
                }
            />
            <span>{data.name}</span>
            <span>{data.character}</span>
        </div>
    )
}

export default ImageAvatar