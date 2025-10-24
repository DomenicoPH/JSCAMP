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
