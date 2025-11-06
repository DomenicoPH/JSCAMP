import { useId } from 'react';
import styles from './SearchFormSection.module.css';

export function SearchFormSection({ onSearch, onTextFilter }){
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
    
  //   const formData = new FormData(event.target)
  //   const filters = {
  //     technology: formData.get(idTechnology),
  //     location: formData.get(idLocation),
  //     experienceLevel: formData.get(idExperienceLevel),
  //   }
  //   onSearch(filters)
  // }

  const handleFilterChange = (event) => {
    const form = event.target.form;
    const formData = new FormData(form);
    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    };
    onSearch(filters)
  }

  const handleTextChange = (event) => {
    const text = event.target.value;
    onTextFilter(text);
  }

  return(
    <>
      <section className={styles.header}>
          <h2 className={styles.headerTitle}>Encuentra tu próximo trabajo</h2>
          <p className={styles.headerText}>Explora miles de oportunidades en el sector tecnológico</p>
        </section>

        <section>
          <form /* onSubmit={handleSubmit} */ id="empleos-search-form" className={styles.form} role="search">

            <div className={styles.searchbar}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input 
                className={styles.formInput} 
                name={idText}
                id="empleos-search-input" 
                type="text" 
                placeholder="Buscar trabajos, empresas o habilidades"
                onChange={handleTextChange}
              />
              {/* <button type="submit" className="">Buscar</button> */}
            </div>

            <div className={styles.search__filters}>
              <select name={idTechnology} onChange={handleFilterChange} id="filter-technology">
                <option value="">Tecnología</option>
                <optgroup label="Tecnologías populares">
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="react">React</option>
                  <option value="node">Node.js</option>
                </optgroup>
                <option value="java">Java</option>
                  <hr></hr>
                <option value="csharp">C#</option>
                <option value="c">C</option>
                <option value="c++">C++</option>
                  <hr></hr>
                <option value="ruby">Ruby++</option>
                <option value="php">PHP++</option>
              </select>

              <select name={idLocation} onChange={handleFilterChange} id="filter-location">
                <option value="">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="barcelona">Barcelona</option>
              </select>

              <select name={idExperienceLevel} onChange={handleFilterChange} id="filter-nivel">
                <option value="">Nivel de experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid-level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
              </select>
            </div>

          </form>    

        </section>
    </>
  )
};