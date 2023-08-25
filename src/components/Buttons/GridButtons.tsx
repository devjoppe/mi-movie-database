import React from "react";
import {Button} from "@nextui-org/react";

interface IProp {
    data: T
}

const GridButtons:React.FC<T> = ({data}) => {

    console.log("Data to GridButtons: ", data)

    return(
        <div className="grid gap-2 grid-cols-2 grid-rows-2">
            { data && data.map((genre) => (
                <Button size="sm" key={genre.id}>{genre.name}</Button>
            ))}
        </div>
    )
}

export default GridButtons