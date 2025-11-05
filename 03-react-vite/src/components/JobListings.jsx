import jobsData from '../data.json';
import { JobCard } from './JobCard';

export function JobListings(){

  return(
    <>
      <h2 className="title__results">Resultados de búsqueda</h2>
      <section id="jobs-list" className="results">
        {jobsData.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </>
  )
};