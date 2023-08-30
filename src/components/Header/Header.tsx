import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";
import SearchField from "./SearchField.tsx";
import {useState} from "react";
import { Button } from '@nextui-org/react';

const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    const handleVisible = () => {
        setIsVisible(!isVisible)
    }

    return (
        <div className="flex relative justify-between h-16 items-center bg-primary pl-4 pr-4">
            <div><Link to="/">HEADER LOGO</Link></div>
            <div>
                <Button isIconOnly onClick={handleVisible}><FaSearch /></Button>
                { isVisible && <SearchField handleVisible={handleVisible}/> }
            </div>
        </div>
    )
}

export default Header