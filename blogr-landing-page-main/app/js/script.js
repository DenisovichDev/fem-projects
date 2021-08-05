const dropdownElements = document.querySelectorAll('.header__dropdown > li');
const arrows = document.querySelectorAll('.header__dropdown > li .arrow');
const arrowSVGPath = document.querySelectorAll('.header__dropdown > li i svg path');

dropdownElements.forEach(function (option, idx) {
    option.addEventListener('mouseover', () => {
        arrowSVGPath[idx].setAttribute('stroke', '#fff');
    })
    option.addEventListener('mouseout', () => {
        arrowSVGPath[idx].setAttribute('stroke', '#c8c8cb');
    })

    option.addEventListener('click', () => {
        if (option.classList.contains("open")) {
            option.classList.remove("open");
            arrows[idx].classList.remove("arrow__open");
        } else {
            closeAllOptions();
            option.classList.add("open");
            arrows[idx].classList.add("arrow__open");
        }
    })

});

function closeAllOptions() {
    dropdownElements.forEach((option, idx) => {
        option.classList.remove("open");
        arrows[idx].classList.remove("arrow__open");
    });
}