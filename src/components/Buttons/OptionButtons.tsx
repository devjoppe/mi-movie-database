import React, {useState} from "react";
import {Button, ButtonGroup} from "@nextui-org/react";

interface optionButtonsInt {
    name: string
}

interface IProp {
    data: optionButtonsInt[]
    handleOptionClick: (data: string) => void
}

const OptionButtons:React.FC<IProp> = ({handleOptionClick, data}) => {

    const [isActive, setIsActive] = useState(data[0].name)

    const checkActive = (data: string) => {
        if(isActive != data){
            setIsActive(data)
            handleOptionClick(data)
        }
    }

    return(
        <div>
            <ButtonGroup>
                {data.map(opt => (
                    <Button key={opt.name} className={isActive === opt.name ? "bg-amber-700" : ""} onClick={() => checkActive(opt.name)}>{opt.name}</Button>
                ))}
            </ButtonGroup>
        </div>
    )
}

export default OptionButtons