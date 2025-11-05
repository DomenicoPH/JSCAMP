import { useState } from "react"

export function JobCard({job}){

    const [isApplied, setIsApplied] = useState(false);
    const handleApplyClick = () => {
        setIsApplied(true);
    }
    const buttonClasses = isApplied ? 'apply-button is-applied' : 'apply-button';
    const buttonText = isApplied ? 'Aplicado' : 'Aplicar';

    return(
        <article
            className="results__item"
            data-modalidad={job.data.modalidad}
            data-nivel={job.data.nivel}
            data-technology={job.data.technology}
        >
            <div>
              <h3 className="results__item-title">{job.titulo}</h3>
              <p className="results__item-company">{job.empresa} | {job.ubicacion}</p>
              <p className="results__item-description">{job.descripcion}</p>
            </div>
            <button onClick={handleApplyClick} className={buttonClasses}>{buttonText}</button>
        </article>
    )
}