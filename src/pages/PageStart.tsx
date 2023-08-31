import MenuGenres from "../sections/MenuGenres.tsx";
import GridMovies from "../sections/GridMovies.tsx";
import OptionButtons from "../components/Buttons/OptionButtons.tsx";
import {useEffect, useState} from "react";
import GridRecentVisited from "../sections/GridRecentVisited.tsx";

const PageStart = () => {

    const options = [{name: "day"}, {name: "week"}]
    const [isTrending, setIsTrending] = useState('day')
    const getTrending = localStorage.getItem('MDTrending')

    console.log(getTrending)

    useEffect(() => {
        if(getTrending) {
            setIsTrending(getTrending)
        }
    }, []);

    const handleOptionClick = (data: string, useLocalStorage: boolean) => {
        setIsTrending(data)
        if(useLocalStorage) {
            localStorage.setItem('MDTrending', data)
        }
    }

    return (
        <>
            <MenuGenres title={"Browse by genre"}/>
            <h2>Most recent</h2>
            <GridMovies url={"movie/"} identifier={"now_playing"} option={null} useRelated={false} />
            <h2>Trending</h2>
            <OptionButtons handleOptionClick={handleOptionClick} data={options} />
            <GridMovies url={"trending/movie/"} identifier={isTrending} option={null} useRelated={false} />
            <h2>Popular</h2>
            <GridMovies url={"movie/"} identifier={"top_rated"} option={null} useRelated={false} />
            <div>
                <h3>My recent visited movies</h3>
                <GridRecentVisited />
            </div>
        </>
    )
}

export default PageStart