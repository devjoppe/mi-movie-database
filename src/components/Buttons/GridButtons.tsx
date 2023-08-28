import React from "react";
import {Button} from "@nextui-org/react";
import {useNavigate} from "react-router-dom";

interface gridButtonsInt {
    id: number,
    name: string
}

interface IProp {
    data: gridButtonsInt[] | null
}

const GridButtons:React.FC<IProp> = ({data}) => {

    const navigate = useNavigate()

    return(
        <div className="grid gap-2 grid-cols-2 grid-rows-2">
            { data && data.map((data) => (
                <Button size="sm" key={data.id} onClick={() => navigate(`/movies/${data.name}?id=${data.id}&page=1`)}>{data.name}</Button>
            ))}
        </div>
    )
}

export default GridButtons