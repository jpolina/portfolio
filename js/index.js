AOS.init()

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

let chevronBounce = function() {
    let chevron = document.querySelector('.chevron');
    
    if (chevron.classList.contains("lift")) {
        chevron.classList.remove("lift");
    } else {
        chevron.classList.add("lift");
    }
};

setInterval(chevronBounce, 800);

let subtitle = document.querySelector('.section__subtitle--intro');

let typewriter = new Typewriter(subtitle, {
    loop: true,
    delay: 20
});

typewriter
    .typeString('I\'m studying CS @ the University of Waterloo!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I\'m a programmer!')
    .pauseFor(2500)
    .deleteChars(13)
    .typeString(' a musician!')
    .pauseFor(2500)
    .start();

document.body.querySelector('.parallax-wrapper').addEventListener('scroll', AOS.init);