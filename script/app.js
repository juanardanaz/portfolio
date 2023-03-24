/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll_header');
    } else {
        header.classList.remove('scroll_header');
    }
}
window.addEventListener('scroll', scrollHeader);

/*=============== RESUME MODAL ===============*/
const modalViews = document.querySelectorAll('.resume_modal');
const modalBtns = document.querySelectorAll('.resume_button'); 
const modalClose = document.querySelectorAll('.resume_modal_close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active_modal');
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
});

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active_modal')
        })
    })
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.projects_content', {
    selectors: {
        target: '.projects_card'
    },
    animation: {
        duration: 300
    }
});

// Link active work
const linkWork = document.querySelectorAll('.work_item');

function activeWork() {
    linkWork.forEach(l => l.classList.remove('active_work'))
    this.classList.add('active_work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial_container", {
    // slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
});

/*=============== DARK LIGHT THEME ===============*/
const btnSwitch = document.getElementById('theme-button');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    //LocalStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('dark', 'true');
        btnSwitch.setAttribute('src', './assets/img/bx-sun.svg');
    } else {
        localStorage.setItem('dark', 'false');
        btnSwitch.setAttribute('src', './assets/img/bx-moon.svg');
    }
});

// We obtain the actual theme
if (localStorage.getItem('dark') === 'true') {
    document.body.classList.add('dark-theme');
    btnSwitch.setAttribute('src', './assets/img/bx-sun.svg');
} else {
    document.body.classList.remove('dark-theme');
    btnSwitch.setAttribute('src', './assets/img/bx-moon.svg');
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
});

sr.reveal(`.intro-info`);
sr.reveal(`.work`, {delay: 500, origin: 'bottom'});
sr.reveal(`.testimonial`, {delay: 500});
sr.reveal(`.about`, {delay: 800});
sr.reveal(`.footer_container`, {delay: 900})


/*=============== TAB TITLE CHANGE ===============*/
let previousTitle = document.title;

// Message when the user leaves to another tab
window.addEventListener('blur', () => {
    previousTitle = document.title;
    document.title = 'Don´t go! Come back! 😱'
});

// Message when the user returns
window.addEventListener('focus', () => {
    document.title = previousTitle;
});