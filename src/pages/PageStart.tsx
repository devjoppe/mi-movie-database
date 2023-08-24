import BrowseGenres from "../components/Sections/BrowseGenres.tsx";
import BrowseMovies from "../components/Sections/BrowseMovies.tsx";

const PageStart = () => {



   return (
       <>
           <BrowseGenres title={"Browse by genre"}/>
           <BrowseMovies title={"Recent movies"} categoryParam={"now_playing"} />
       </>
   )
}

export default PageStart