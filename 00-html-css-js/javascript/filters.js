// Filters
const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')

filter.addEventListener('change', () => {
    
    const jobs = document.querySelectorAll('.results__item')

    const selectedValue = filter.value;
    if(selectedValue){
        mensaje.textContent = `Has seleccionado ${selectedValue}`
    } else {
        mensaje.textContent = 'No has seleccionado nada'
    }

    jobs.forEach(job => {
        //const modalidad = job.dataset.modalidad;
        const modalidad = job.getAttribute('data-modalidad');
        const isShown = selectedValue === '' || selectedValue === modalidad;
        job.classList.toggle('is-hidden', !isShown)
    })    
})
