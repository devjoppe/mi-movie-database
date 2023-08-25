import BrowseGenres from "../components/Sections/BrowseGenres.tsx";
import BrowseMovies from "../components/Sections/BrowseMovies.tsx";

const PageStart = () => {

   return (
       <>
           <BrowseGenres title={"Browse by genre"}/>
           <BrowseMovies title={"Most recent"} identifier={"now_playing"} option={null} />
           <BrowseMovies title={"Top rated"} identifier={"top_rated"} option={null}/>
           <BrowseMovies title={"Most popular"} identifier={"popular"} option={null}/>
       </>
   )
}

export default PageStart