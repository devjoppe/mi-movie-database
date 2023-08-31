import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetchGenre} from "../../hooks/useFetchGenre.ts";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {genresInt} from "../../interfaces/genres.interface.ts";

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
        <div className="py-4 z-20 bg-background sticky top-0">
            {isVisible && menuItems &&
                <div className="flex justify-between items-center">
                    <div>
                        <Button className="mr-2" size={"sm"} onClick={() => navigate('/')}>Home</Button>
                        <Button size={"sm"} onClick={() => navigate(-1)}>Go back</Button>
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