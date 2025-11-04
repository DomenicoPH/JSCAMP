function App() {

  return (
    <>

      <header className="header">
        <a className="header__logo-link" href="./index.html">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
            <path fill="#09f" d="m15.9 5.7l-2-3.4L10 4.5V0H6v4.5L2 2.3L0 5.7L3.9 8L0 10.3l2 3.4l4-2.2V16h4v-4.5l3.9 2.2l2-3.4l-4-2.3z"/>
          </svg>
          <h1 className="header__logo-text">DevJobs</h1>
        </a>

        <nav className="header__nav">
          <a className="header__nav-link" href="./empleos.html">Empleos</a>
          <a className="header__nav-link" href="#">Empresas</a>
          <a className="header__nav-link" href="#">Salarios</a>
        </nav>

        <div className="header__actions">
          <devjobs-avatar
            service="github"
            username="DomenicoPH"
            size="24"
          ></devjobs-avatar>
        </div>
      </header>

      <div className="search container">
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

        <h2 className="title__results">Resultados de búsqueda</h2>

        <section id="jobs-list" className="results"></section>

      </div>

      <nav className="pagination">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>
        <a href="#" className="is-active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a>
      </nav>

      <footer className="footer">
        <small className="footer__text">&copy; 2025 DevJobs. Todos los derechos reservados.</small>
      </footer>

    </>
  )
}

export default App
