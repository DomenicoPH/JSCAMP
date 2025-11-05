import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { JobListings } from "./components/JobListings.jsx"
import { Pagination } from "./components/Pagination.jsx"
import { SearchFormSection } from "./components/SearchFormSection.jsx"

function App() {

  return (
    <>

      <Header />

      <div className="search container">
        
        <SearchFormSection />

        <JobListings />

      </div>

      <Pagination />

      <Footer />

    </>
  )
}

export default App
