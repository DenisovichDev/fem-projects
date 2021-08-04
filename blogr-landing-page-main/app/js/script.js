const headerOptions = document.querySelectorAll('.header__dropdown li');
const dropdownArrows = document.querySelectorAll('.header__dropdown li i svg');

headerOptions.forEach(function (option, idx) {
    option.addEventListener('mouseover', () => {
        dropdownArrows[idx].lastChild.setAttribute('stroke', '#fff');
    })
    option.addEventListener('mouseout', () => {
        dropdownArrows[idx].lastChild.setAttribute('stroke', '#c8c8cb');
    })

    option.addEventListener('click', () => {
        dropdownArrows[idx].classList.toggle('open');

        // Add this class to the li, not .arrow
    })
});