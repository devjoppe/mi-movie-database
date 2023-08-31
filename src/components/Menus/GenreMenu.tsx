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
        <div>
            {isVisible && menuItems &&
                <>
                    <div>
                        <Button onClick={() => navigate(-1)}>Go back</Button>
                    </div>
                    <div>
                        <Dropdown>
                            <DropdownTrigger>
                                <Button>Choose a genre</Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Genres" >
                                { menuItems && menuItems.map(mItem => (
                                    <DropdownItem key={mItem.key}>{mItem.label}</DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </>
            }
        </div>
    )
}

export default GenreMenu