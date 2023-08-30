import { Button, Input } from '@nextui-org/react';
import React from "react";

interface IProp {
    handleVisible: () => void
}

const SearchField:React.FC<IProp> = ({handleVisible}) => {

    return(
        <div className="flex items-center px-2 h-full w-full absolute top-0 left-0 bg-secondary ">
            <Input />
            <Button className="ml-2"/>
            <Button className="ml-2" onClick={handleVisible}/>
        </div>
    )
}

export default SearchField