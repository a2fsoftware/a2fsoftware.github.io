/*========== toggle icon navbar ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== scroll sections active link ============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*========== scroll sections active link ============*/
    let header = document.querySelector('header');
    header .classList.toggle('sticky', window.scrollY > 100);


    /*========== remove navbar when scroll/click ============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*========== scroll reveal ============*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


/*========== typed js ============*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Applicaitons', 'Android Applicatons', 'IOS Applcations', 'Desktop Applications', 'API Development', 'API Integration', 'Domain names and Hosting', 'Cloud Services (AWS, Azure)', 'Cloud Migrations','DevOps and Automattion', 'Bot Development'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* =========== EmailJS Automation code ============= */
function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        email: document.getElementById("email").value,
        ph_number: document.getElementById("ph_number").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_sk7xsn2";
    const templateID = "template_fh78ycd"; 

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("email").value = "";
        document.getElementById("ph_number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
    }).catch((err) => console.log(err));
}
