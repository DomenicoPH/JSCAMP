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

const jobsList = document.querySelector('#jobs-list');
jobsList?.addEventListener('click', (event) => {
    const element = event.target;
    if(element.classList.contains('apply-button')){
        element.textContent = '¡Aplicado!';
        element.classList.add('is-applied')
        element.disabled = true;
    }
});

const filter = document.querySelector('#filter-technology')
filter.addEventListener('change', () => {
    console.log(filter.value)
})