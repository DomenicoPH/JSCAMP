// Filters
const filterByLocation = document.querySelector('#filter-location');
const filterByLevel = document.querySelector('#filter-nivel');
const filterByTech = document.querySelector('#filter-technology');

const handleFilter = (value, attribute) => {
    const selectedValue = value.trim().toLowerCase();
    const jobs = document.querySelectorAll('.results__item')

    jobs.forEach(job => {
        //const modalidad = job.dataset.modalidad;
        const attrValue = job.getAttribute(attribute);

        if(!attrValue){
            job.classList.add('is-hidden');
            return
        }
        const values = attrValue.split(',').map(v => v.trim().toLowerCase());
        const isShown = selectedValue === '' || values.includes(selectedValue);
        job.classList.toggle('is-hidden', !isShown)
    })   
}

filterByLocation.addEventListener('change', e => handleFilter(e.target.value, 'data-modalidad'))
filterByLevel.addEventListener('change', e => handleFilter(e.target.value, 'data-nivel'))
filterByTech.addEventListener('change', e => handleFilter(e.target.value, 'data-technology'))