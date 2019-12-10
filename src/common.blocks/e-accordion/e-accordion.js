
const accordionClickHandler = function(event) {
    const target = event.target;

    if (target.closest('.e-accordion__short')) {
        const accordion = target.closest('.e-accordion');
        const accordionMore = accordion.querySelector('.e-accordion__more');

        accordionMore.classList.toggle('e-accordion__more_view_default');
    }
}

export default accordionClickHandler;