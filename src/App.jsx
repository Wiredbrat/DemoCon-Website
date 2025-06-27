import { Outlet } from "react-router"
import { Footer, Header, ScrollToTop, ScrollToTopButton } from "./importer"

function App() {
  return (
    <div className="bg-gray-100 font-open-sans">
     <Header/>
     <ScrollToTop/>
     <ScrollToTopButton/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App
