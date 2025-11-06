import jobsData from './data.json';
import { useState } from "react"
import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { JobListings } from "./components/JobListings.jsx"
import { Pagination } from "./components/Pagination.jsx"
import { SearchFormSection } from "./components/SearchFormSection.jsx"

const RESULTS_PER_PAGE = 4;

function App() {
  const [ filters, setFilters ] = useState({
      technology: '',
      location: '',
      experienceLevel: '',
    });
  const [ textToFilter, setTextToFilter ] = useState('');
  const [ currentPage, setCurrentPage ] = useState(1);

  const jobsFilteredByFilters = jobsData.filter( job => {
    return(
      (filters.technology === '' || job.data.technology === filters.technology) &&
      (filters.location === '' || job.data.modalidad === filters.location) &&
      (filters.experienceLevel === '' || job.data.nivel === filters.experienceLevel)
    )
  })

  const jobsWithTextFilter = textToFilter === ''
    ? jobsFilteredByFilters
    : jobsFilteredByFilters.filter(job => {
      return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
    });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pageResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1)
  }

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter)
    setCurrentPage(1);
  }

  return (
    <>

      <Header />

      <div className="search container">
        
        <SearchFormSection onSearch={handleSearch} onTextFilter={handleTextFilter} />

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
