import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { JobListings } from "./components/JobListings.jsx"
import { Pagination } from "./components/Pagination.jsx"
import { SearchFormSection } from "./components/SearchFormSection.jsx"

function App() {

  const handlePageChange = (page) => {
    console.log(`Cambiando a la página ${page}`);
  }

  return (
    <>

      <Header />

      <div className="search container">
        
        <SearchFormSection />

        <JobListings />

      </div>

      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={handlePageChange}
      />

      <Footer />

    </>
  )
}

export default App
