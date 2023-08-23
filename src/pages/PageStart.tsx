import {useFetchGenre} from "../hooks/useFetchGenre.ts";

const PageStart = () => {

    const genres = useFetchGenre()

    console.log(genres.data)

   return (
       <div>
           {genres.isFetching &&
               <p>Fetching data</p>
           }
           {genres.isSuccess &&
               <p>Loading done!</p>
           }
       </div>
   )
}

export default PageStart