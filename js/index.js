AOS.init()
document.body.querySelector('.parallax-wrapper').addEventListener('scroll', AOS.init);


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

let subtitle = document.getElementById('subtitle');

let typewriter = new Typewriter(subtitle, {
    loop: false,
    delay: 20,
});

for(let i of Array.apply(null, {length: 100}).map(Number.call, Number)) {
    typewriter
        .typeString('I\'m a CS student @ UWaterloo!')
        .pauseFor(2500)
        .deleteChars(23)
        .typeString('programmer!')
        .pauseFor(2500)
        .deleteChars(11)
        .typeString('musician!')
        .pauseFor(2500)
        .deleteAll(50)
        .start();
}