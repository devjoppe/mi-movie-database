import MenuGenres from "../sections/MenuGenres.tsx";
import GridMovies from "../sections/GridMovies.tsx";

const PageStart = () => {

   return (
       <>
           <MenuGenres title={"Browse by genre"}/>
           <GridMovies title={"Most recent"} identifier={"now_playing"} option={null} />
           <GridMovies title={"Top rated"} identifier={"top_rated"} option={null}/>
           <GridMovies title={"Most popular"} identifier={"popular"} option={null}/>
       </>
   )
}

export default PageStart