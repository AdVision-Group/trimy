window.onscroll = function() {
    animateServices();
    animateReferences();
}

function animateServices() {
    var height = window.innerHeight;
    
    var serPan1 = document.getElementById("ser-pan-1");
    var serPan2 = document.getElementById("ser-pan-2");

    if (serPan1.getBoundingClientRect().top < height) {
        serPan1.classList.add("animate__animated");
        serPan1.classList.add("animate__fadeInUp");
    }

    if (serPan2.getBoundingClientRect().top < height) {
        serPan2.classList.add("animate__animated");
        serPan2.classList.add("animate__fadeInUp");
    }
}

function animateReferences() {
    var height = window.innerHeight;

    var refImg1 = document.getElementById("ref-img-1");
    var refImg2 = document.getElementById("ref-img-2");
    var refImg3 = document.getElementById("ref-img-3");
    var refImg4 = document.getElementById("ref-img-4");
    var refImg5 = document.getElementById("ref-img-5");

    var refPan1 = document.getElementById("ref-pan-1");
    var refPan2 = document.getElementById("ref-pan-2");
    var refPan3 = document.getElementById("ref-pan-3");
    var refPan4 = document.getElementById("ref-pan-4");
    var refPan5 = document.getElementById("ref-pan-5");

    if (refImg1.getBoundingClientRect().top < height) {
        refImg1.classList.add("animate__animated");
        refImg1.classList.add("animate__fadeInLeft");

        refPan1.classList.add("animate__animated");
        refPan1.classList.add("animate__fadeInRight");
    }

    if (refImg2.getBoundingClientRect().top < height) {
        refImg2.classList.add("animate__animated");
        refImg2.classList.add("animate__fadeInLeft");

        refPan2.classList.add("animate__animated");
        refPan2.classList.add("animate__fadeInRight");
    }

    if (refImg3.getBoundingClientRect().top < height) {
        refImg3.classList.add("animate__animated");
        refImg3.classList.add("animate__fadeInLeft");

        refPan3.classList.add("animate__animated");
        refPan3.classList.add("animate__fadeInRight");
    }

    if (refImg4.getBoundingClientRect().top < height) {
        refImg4.classList.add("animate__animated");
        refImg4.classList.add("animate__fadeInLeft");

        refPan4.classList.add("animate__animated");
        refPan4.classList.add("animate__fadeInRight");
    }

    if (refImg5.getBoundingClientRect().top < height) {
        refImg5.classList.add("animate__animated");
        refImg5.classList.add("animate__fadeInLeft");

        refPan5.classList.add("animate__animated");
        refPan5.classList.add("animate__fadeInRight");
    }
}