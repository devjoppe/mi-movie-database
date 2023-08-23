import {Routes, Route} from "react-router-dom";

import PageStart from "./pages/PageStart.tsx";
import PageGenre from "./pages/PageGenre.tsx";
import PageMovie from "./pages/PageMovie.tsx";
import PageActor from "./pages/PageActor.tsx";
import PageSearch from "./pages/PageSearch.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";

function App() {

  return (
      <Routes>
          <Route path="/" element={<PageStart />} />
          <Route path="/movies/:genre" element={<PageGenre />} />
          <Route path="/movie/:id" element={<PageMovie />} />
          <Route path="/actor/:id" element={<PageActor />} />
          <Route path="/search/" element={<PageSearch />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
  )
}

export default App
