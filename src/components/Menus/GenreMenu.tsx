import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetchGenre} from "../../hooks/useFetchGenre.ts";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {genresInt} from "../../interfaces/genres.interface.ts";
import {FaHome} from "react-icons/fa";
import {IoArrowBackOutline} from "react-icons/io5";

const GenreMenu = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [isVisible, setIsVisible] = useState(false)
    const [menuItems, setMenuItems] = useState<genresInt | null>(null)
    const getGenres = useFetchGenre()

    useEffect(() => {
        if (getGenres.data) {
            setMenuItems(getGenres.data)
        }
    }, [getGenres])

    useEffect(() => {
        if(location.pathname !== '/') {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [location, isVisible]);

    return(
        <div className="z-20 bg-gray-900 sticky top-0 pt-1">
            {isVisible && menuItems &&
                <div className="flex justify-between items-center p-2 pt-1">
                    <div>
                        <Button isIconOnly className="mr-2" size={"md"} onClick={() => navigate('/')}><FaHome /></Button>
                        <Button isIconOnly size={"md"} onClick={() => navigate(-1)}><IoArrowBackOutline /></Button>
                    </div>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button>Choose a genre</Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Genre menu" >
                                { menuItems && menuItems.genres.map(mItem => (
                                    <DropdownItem key={mItem.id} onClick={() => navigate(`/movies/${mItem.name}?id=${mItem.id}&page=1`)}>{mItem.name}</DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            }
        </div>
    )
}

export default GenreMenu