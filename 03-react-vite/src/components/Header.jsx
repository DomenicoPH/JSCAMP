export function Header(){
  return(
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
  )
};