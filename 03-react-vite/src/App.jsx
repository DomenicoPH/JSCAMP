import jobsData from './data.json';
import { useState } from "react"
import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { JobListings } from "./components/JobListings.jsx"
import { Pagination } from "./components/Pagination.jsx"
import { SearchFormSection } from "./components/SearchFormSection.jsx"

const RESULTS_PER_PAGE = 4;

function App() {

  // Lógica de paginación
  const [ currentPage, setCurrentPage ] = useState(1);
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pageResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // Lógica de paginación

  return (
    <>

      <Header />

      <div className="search container">
        
        <SearchFormSection />

        <JobListings jobsData={pageResults} />

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
