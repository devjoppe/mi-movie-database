import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetchGenre} from "../../hooks/useFetchGenre.ts";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

interface menuItemsInt {
    key: number,
    label: string
}

const GenreMenu = () => {

    const location = useLocation()
    const navigate = useNavigate()

    const [isVisible, setIsVisible] = useState(false)
    const [menuItems, setMenuItems] = useState<menuItemsInt[]>([])
    const getGenres = useFetchGenre()

    useEffect(() => {
        if(location.pathname !== '/') {
            let genreArray: menuItemsInt[] = []
            setIsVisible(true)
            if(getGenres.data) {
                // This is SO overkill (see commit message) -> But I don´t have the "ork" to change it.
                getGenres.data.genres.map(item => (
                    genreArray.push({
                        label: item.name,
                        key: item.id
                    })
                ))
                setMenuItems(genreArray)
            }
        } else {
            setIsVisible(false)
        }
    }, [location, isVisible]);

    return(
        <div className="p-4 sticky top-0">
            {isVisible && menuItems &&
                <div className="flex justify-between ">
                    <div>
                        <Button onClick={() => navigate(-1)}>Go back</Button>
                    </div>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button>Choose a genre</Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Genre menu" >
                                { menuItems && menuItems.map(mItem => (
                                    <DropdownItem key={mItem.key} onClick={() => navigate(`/movies/${mItem.label}?id=${mItem.key}&page=1`)}>{mItem.label}</DropdownItem>
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