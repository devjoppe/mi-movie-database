import {Routes, Route} from "react-router-dom";
import PageStart from "./pages/PageStart.tsx";
import PageGenres from "./pages/PageGenres.tsx";
import PageMovie from "./pages/PageMovie.tsx";
import PageActor from "./pages/PageActor.tsx";
import PageSearch from "./pages/PageSearch.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GlobalLoading from "./components/GlobalLoading/GlobalLoading.tsx";

function App() {

  return (
      <div className="container lg pl-5 pr-5">
          <Header />
          <GlobalLoading />
          <Routes>
              <Route path="/" element={<PageStart />} />
              <Route path="/movies/:genres" element={<PageGenres />} />
              <Route path="/movie/:id" element={<PageMovie />} />
              <Route path="/actor/:id" element={<PageActor />} />
              <Route path="/search/" element={<PageSearch />} />
              <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </div>
  )
}

export default App
