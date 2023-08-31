import React, {useEffect, useState} from "react";
import {Button, ButtonGroup} from "@nextui-org/react";

interface optionButtonsInt {
    name: string
}

interface IProp {
    data: optionButtonsInt[]
    handleOptionClick: (data: string, localStorage: boolean) => void,
}

const OptionButtons:React.FC<IProp> = ({handleOptionClick, data}) => {

    const [isActive, setIsActive] = useState(data[0].name)
    const usingLocalStorage = true

    useEffect(() => {
        if(usingLocalStorage) {
            setIsActive((localStorage.getItem('MDTrending') as string))
        }
    }, []);

    const checkActive = (data: string) => {
        if(isActive != data){
            setIsActive(data)
            handleOptionClick(data, usingLocalStorage)
        }
    }

    return(
        <div>
            <ButtonGroup>
                {data.map(opt => (
                    <Button size={"sm"} key={opt.name} className={isActive === opt.name ? "bg-amber-700" : ""} onClick={() => checkActive(opt.name)}>{opt.name}</Button>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default OptionButtons