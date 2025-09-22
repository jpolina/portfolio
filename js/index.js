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
        .typeString('software engineer!')
        .pauseFor(2500)
        .deleteChars(18)
        .typeString('musician!')
        .pauseFor(2500)
        .deleteAll(50)
        .start();
}

// adding links to images

document.querySelector('.project0-img').onclick = () => {
    window.open('https://muvision.netlify.app/', '_blank').focus();
}

document.querySelector('.project1-img').onclick = () => {
    window.open('https://chrome.google.com/webstore/detail/lofidoro/pjgoihdbljhplcmojnnfokmacpoonnee', '_blank').focus();
}

document.querySelector('.project2-img1').onclick = () => {
    window.open('https://jpolina.github.io/marketplace-frontend/', '_blank').focus();
}

document.querySelector('.project2-img2').onclick = () => {
    window.open('https://jpolina.github.io/marketplace-frontend/', '_blank').focus();
}

document.querySelector('.project3-img').onclick = () => {
    window.open('https://jpolina.github.io/chord-generator/', '_blank').focus();
}