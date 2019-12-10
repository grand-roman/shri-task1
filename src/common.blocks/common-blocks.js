import accordionClickHandler from './e-accordion/e-accordion';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').addEventListener('click', (event) => {
        accordionClickHandler(event);
    });
});