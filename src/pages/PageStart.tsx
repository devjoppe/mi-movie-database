import BrowseGenres from "../components/Sections/BrowseGenres.tsx";
import BrowseMovies from "../components/Sections/BrowseMovies.tsx";

const PageStart = () => {

   return (
       <>
           <BrowseGenres title={"Browse by genre"}/>
           <BrowseMovies title={"Most recent"} categoryParam={"now_playing"} />
           <BrowseMovies title={"Top rated"} categoryParam={"top_rated"} />
           <BrowseMovies title={"Most popular"} categoryParam={"popular"} />
       </>
   )
}

export default PageStart