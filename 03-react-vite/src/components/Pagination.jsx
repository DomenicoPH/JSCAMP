export function Pagination({ currentPage = 1, totalPages = 10 }){

    const pages = Array.from({length: totalPages}, (_, i) => i + 1);

    return(
      <nav className="pagination">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></a>
        {pages.map(page => (
            <a 
                href="#"
                className={currentPage === page ? 'is-active': ''}
            >{page}</a>
        ))}
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a>
      </nav>
    )
};