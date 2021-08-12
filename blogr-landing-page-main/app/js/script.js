// Elements

const body = document.querySelector("body");
const dropdownElements = document.querySelectorAll('.header__dropdown > li');
const introArrows = document.querySelectorAll('.header__dropdown > li .arrow');
const introArrowSVGPath = document.querySelectorAll('.header__dropdown > li i svg path');
const hamburger = document.querySelector(".header__hamburger");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const hamburgerItems = document.querySelectorAll('.hamburger-items');
const hamburgerItemsMenu = document.querySelectorAll('.header__dropdown__menu.dropdown--hamburger');
const hamburgerArrows = document.querySelectorAll('.header__menu__items .arrow');
const hamburgerArrowsSVGPath = document.querySelectorAll('.header__menu__items .arrow > svg path');

// Code

dropdownElements.forEach(function (option, idx) {
    option.addEventListener('mouseover', () => {
        introArrowSVGPath[idx].setAttribute('stroke', '#fff');
    })
    option.addEventListener('mouseout', () => {
        introArrowSVGPath[idx].setAttribute('stroke', '#c8c8cb');
    })

    option.addEventListener('click', () => {
        if (option.classList.contains("open")) {
            option.classList.remove("open");
            introArrows[idx].classList.remove("open");
        } else {
            closeAllOptions(dropdownElements, introArrows);
            option.classList.add("open");
            introArrows[idx].classList.add("open");
        }
    })

});

function closeAllOptions(nodeList, arrowList) {
    nodeList.forEach((option, idx) => {
        option.classList.remove("open");
        arrowList[idx].classList.remove("open");
        hamburgerItemsMenu[idx].style.maxHeight = null;
    });
}

// Hamburger Toggle

hamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) {
        // Hamburger Menu Close
        closeAllOptions(hamburgerItemsMenu, hamburgerArrows);
        header.classList.remove('open');
        body.classList.remove('noscroll');
        headerMenu.classList.add('fade-out');
        headerMenu.classList.remove('fade-in');
    } else {
        // Hamburger Menu Open

        header.classList.add('open');
        body.classList.add('noscroll');
        headerMenu.classList.add('fade-in');
        headerMenu.classList.remove('fade-out');
    }

})

// Hamburger Item Toggle

hamburgerItems.forEach(function (option, idx) {
    option.addEventListener('click', () => {

        let panel = hamburgerItemsMenu[idx];

        if (panel.classList.contains('open')) {
            panel.classList.remove('open');
            hamburgerArrows[idx].classList.remove("open");
            panel.style.maxHeight = null;
        } else {
            closeAllOptions(hamburgerItemsMenu, hamburgerArrows);
            panel.classList.add('open');
            hamburgerArrows[idx].classList.add("open");
            panel.style.maxHeight = (panel.scrollHeight * 2 + 50) + 'px'; // Mult by 2 because overflowed flex contents is based on center
        }


    })
})

// Parallax -----------------------------

const parallaxElements = document.querySelectorAll(".parallax")

let xScrollPosition, yScrollPosition;
let yOffset = 190;



window.addEventListener('scroll', () => {

    parallaxElements.forEach(element => {
        yScrollPosition = window.scrollY;
        yTranslateValue = map(yScrollPosition, 0, body.scrollHeight - window.innerHeight, -yOffset, yOffset);
        setTranslateY(yTranslateValue, element);
    });

})

function setTranslateY(yPos, el) {
    if (el.classList.contains('absolute')) {
        el.style.transform = "translate( -50%, " + yPos + "px)";
        return
    }
    el.style.transform = "translateY(" + yPos + "px)";
}

function map(val, m1, m2, n1, n2) {
    return ((((val - m1) / (m2 - m1)) * (n2 - n1)) + n1)
}

// For editor SVG

const stroke = document.getElementById("stroke-svg");
const defaultTranslateYVal = 242;
const offset = 200;

function checkStroke() {
    const triggerBottom = (window.innerHeight / 3) * 2;

    const strokeTop = stroke.getBoundingClientRect().top;

    if (strokeTop < triggerBottom) {
        stroke.style.transform = "translate(0, 242px)";
    } else {
        stroke.style.transform = "translate(0, 380px)";
    }
}

window.addEventListener('scroll', checkStroke);