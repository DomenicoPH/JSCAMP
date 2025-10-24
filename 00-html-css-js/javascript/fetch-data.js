// Fetch Data
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