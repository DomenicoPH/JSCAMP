/*
const botones = document.querySelectorAll('.apply-button');
botones.forEach(boton => {
    boton.addEventListener('click', () => {
      boton.textContent = '¡Aplicado!';
      boton.classList.add('is-applied')
      boton.disabled = true;
    })
});
*/

// Apply button
const jobsList = document.querySelector('#jobs-list');
const callToAction = document.querySelector('.call-to-action');
function handleApplyClick(event){
    const element = event.target;
    if(element.classList.contains('apply-button')){
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied')
        element.disabled = true;
    }
}
jobsList?.addEventListener('click', handleApplyClick);
callToAction?.addEventListener('click', handleApplyClick);


// Filter
const filter = document.querySelector('#filter-location')
const mensaje = document.querySelector('#filter-selected-value')
const jobs = document.querySelectorAll('.results__item')
filter.addEventListener('change', () => {
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


//const searchInput = document.querySelector('#empleos-search-input');
//searchInput.addEventListener('input', () => { console.log(searchInput.value) });
//searchInput.addEventListener('blur', () => { console.log('Se dispara cuando el campo queda fuera de foco') })
//document.addEventListener('keydown', (event) => { console.log('Tecla presionada: ', event.key) })


const searchForm = document.querySelector('#empleos-search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit');
})
