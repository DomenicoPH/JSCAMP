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


//const searchInput = document.querySelector('#empleos-search-input');
//searchInput.addEventListener('input', () => { console.log(searchInput.value) });
//searchInput.addEventListener('blur', () => { console.log('Se dispara cuando el campo queda fuera de foco') })
//document.addEventListener('keydown', (event) => { console.log('Tecla presionada: ', event.key) })

/*const searchForm = document.querySelector('#empleos-search-form');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('submit');
})*/

// Fetch
const container = document.querySelector('.results');

fetch('./data.json')
.then( response => response.json() )
.then( jobs => {
    jobs.forEach(job => {
        const article = document.createElement('article')
        
        article.className = 'results__item'
        article.dataset.modalidad = job.data.modalidad
        article.dataset.nivel = job.data.nivel
        article.dataset.technology = job.data.technology

        article.innerHTML = `
            <div>
              <h3 class="results__item-title">${job.titulo}</h3>
              <p class="results__item-company">${job.empresa} | ${job.ubicacion}</p>
              <p class="results__item-description">${job.descripcion}</p>
            </div>
            <button class="apply-button">Aplicar</button>
        `
        container.appendChild(article);
    })
})