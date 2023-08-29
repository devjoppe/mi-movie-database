import MenuGenres from "../sections/MenuGenres.tsx";
import GridMovies from "../sections/GridMovies.tsx";

const PageStart = () => {

   return (
       <>
           <MenuGenres title={"Browse by genre"}/>
           <GridMovies title={"Most recent"} url={"movie/"} identifier={"now_playing"} option={null} useRelated={false} />
           <GridMovies title={"Trending"} url={"trending/movie/"} identifier={"day"} option={null} useRelated={false} />
           <GridMovies title={"Most popular"} url={"movie/"} identifier={"top_rated"} option={null} useRelated={false} />
       </>
   )
}

export default PageStart