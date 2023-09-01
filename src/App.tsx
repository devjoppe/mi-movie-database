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
import GenreMenu from "./components/Menus/GenreMenu.tsx";

function App() {
  return (
      <>
          <div className="w-full bg-gray-900 flex flex-col items-center">
              <Header />
              <div className="h-1 bg-gray-800 w-full">
                  <GlobalLoading />
              </div>
          </div>
          <div className="container lg">
              <GenreMenu />
              <div className="container p-4 pt-8">
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
          </div>
      </>
  )
}

export default App
