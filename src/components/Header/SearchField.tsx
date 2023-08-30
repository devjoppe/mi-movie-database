import { Button, Input } from '@nextui-org/react';
import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

interface IProp {
    handleVisible: () => void
}

const SearchField:React.FC<IProp> = ({handleVisible}) => {

    const navigate = useNavigate()

    const [queryText, setQueryText] = useState("")

    return(
        <div className="flex items-center px-2 h-full w-full absolute top-0 left-0 bg-secondary ">
            <form className="flex items-center w-full" onSubmit={(e) => {
                    e.preventDefault()
                    navigate(`/search/?query=${queryText}&page=1`)
                    setQueryText("")
                    handleVisible()
                }}>
                <Input label="Search by keyword" size={"sm"} value={queryText} onChange={(e) => {
                    setQueryText(e.target.value)
                }}/>
                <Button isIconOnly className="ml-2"  type="submit"><FaSearch /></Button>
                <Button isIconOnly className="ml-2" onClick={handleVisible}><AiOutlineClose /></Button>
            </form>
        </div>
    )
}

export default SearchField