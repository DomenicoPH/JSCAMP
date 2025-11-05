export function SearchFormSection(){
  return(
    <>
      <section className="search__header">
          <h2 className="search__header-title">Encuentra tu próximo trabajo</h2>
          <p className="search__header-text">Explora miles de oportunidades en el sector tecnológico</p>
        </section>

        <section>
          <form id="empleos-search-form" className="search__form" role="search">

            <div className="search__searchbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1">
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input className="hero__form-input" name="search" id="empleos-search-input" required type="text" placeholder="Buscar trabajos, empresas o habilidades" />
            </div>

            <div className="search__filters">
              <select className="search__filter" id="filter-technology">
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

              <select className="search__filter" id="filter-location">
                <option value="">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="barcelona">Barcelona</option>
              </select>

              <select className="search__filter" id="filter-nivel">
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