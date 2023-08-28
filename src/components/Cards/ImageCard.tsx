import React from "react";
import {Card, Image} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

interface imageCardInt {
    title: string,
    id: number,
    poster_path: string
}

interface IProp {
    data: imageCardInt
}

const ImageCard:React.FC<IProp> = ({data}) => {

    const navigate = useNavigate()

    return(
        <Card className="w-36 flex-shrink-0">
            <Image
                alt={`Image background for ${data.title}`}
                className="object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
                width={150}
                onClick={() => navigate("/movie/"+data.id)}
            />
        </Card>
    )
}

export default ImageCard