import { useState } from "react"
import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { JobListings } from "./components/JobListings.jsx"
import { Pagination } from "./components/Pagination.jsx"
import { SearchFormSection } from "./components/SearchFormSection.jsx"

function App() {

  console.log('Render App');

  const [ currentPage, setCurrentPage ] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>

      <Header />

      <div className="search container">
        
        <SearchFormSection />

        <JobListings />

      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <Footer />

    </>
  )
}

export default App
