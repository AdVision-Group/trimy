/*function showMenu() {
    var button = document.getElementById("mobile-button");
    var menu = document.getElementById("mobile-menu");

    document.getElementById("mobile-line-2").style.width = "70%";
    document.getElementById("mobile-line-3").style.width = "40%";

    menu.style.right = "0";

    button.setAttribute("onclick", "hideMenu();");
}*/

/*function hideMenu() {
    var button = document.getElementById("mobile-button");
    var menu = document.getElementById("mobile-menu");

    document.getElementById("mobile-line-2").style.width = "100%";
    document.getElementById("mobile-line-3").style.width = "100%";

    menu.style.right = "-100vw";

    button.setAttribute("onclick", "showMenu();");
}*/

function showMenu() {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("mobile-menu");

    menuButton.childNodes[1].style.transform = "translateY(8px) rotate(45deg)";
    menuButton.childNodes[3].style.transform = "scale(0)";
    menuButton.childNodes[5].style.transform = "translateY(-8px) rotate(-45deg)";

    menuButton.setAttribute("onclick", "hideMenu()");

    menu.style.display = "inline-block";
    setTimeout(function() {
        menu.style.right = "0";
    }, 1);
}

function hideMenu() {
    var menuButton = document.getElementById("menu-button");
    var menu = document.getElementById("mobile-menu");

    menuButton.childNodes[1].style.transform = "none";
    menuButton.childNodes[3].style.transform = "none";
    menuButton.childNodes[5].style.transform = "none";

    menuButton.setAttribute("onclick", "showMenu()");

    menu.style.right = "-100vw";
    setTimeout(function() {
        menu.style.display = "none";
    }, 601);
}

window.onscroll = function() {
    animateServices();
    animateReferences();
}

function animateServices() {
    var height = window.innerHeight;
    
    var serItem1 = document.getElementById("ser-item-1");
    var serItem2 = document.getElementById("ser-item-2");
    var serItem3 = document.getElementById("ser-item-3");
    var serItem4 = document.getElementById("ser-item-4");
    var serItem5 = document.getElementById("ser-item-5");
    var serItem6 = document.getElementById("ser-item-6");

    if (serItem1.getBoundingClientRect().top < height) {
        serItem1.classList.add("animate__animated");
        serItem1.classList.add("animate__fadeInUp");
    }

    if (serItem2.getBoundingClientRect().top < height) {
        serItem2.classList.add("animate__animated");
        serItem2.classList.add("animate__fadeInUp");
    }

    if (serItem3.getBoundingClientRect().top < height) {
        serItem3.classList.add("animate__animated");
        serItem3.classList.add("animate__fadeInUp");
    }

    if (serItem4.getBoundingClientRect().top < height) {
        serItem4.classList.add("animate__animated");
        serItem4.classList.add("animate__fadeInUp");
    }

    if (serItem5.getBoundingClientRect().top < height) {
        serItem5.classList.add("animate__animated");
        serItem5.classList.add("animate__fadeInUp");
    }

    if (serItem6.getBoundingClientRect().top < height) {
        serItem6.classList.add("animate__animated");
        serItem6.classList.add("animate__fadeInUp");
    }
}

function animateReferences() {
    var height = window.innerHeight;

    var refImg1 = document.getElementById("ref-img-1");
    var refImg2 = document.getElementById("ref-img-2");
    var refImg3 = document.getElementById("ref-img-3");
    var refImg4 = document.getElementById("ref-img-4");
    var refImg5 = document.getElementById("ref-img-5");
    var refImg6 = document.getElementById("ref-img-6");

    var refPan1 = document.getElementById("ref-pan-1");
    var refPan2 = document.getElementById("ref-pan-2");
    var refPan3 = document.getElementById("ref-pan-3");
    var refPan4 = document.getElementById("ref-pan-4");
    var refPan5 = document.getElementById("ref-pan-5");
    var refPan6 = document.getElementById("ref-pan-6");

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

    if (refImg6.getBoundingClientRect().top < height) {
        refImg6.classList.add("animate__animated");
        refImg6.classList.add("animate__fadeInLeft");

        refPan6.classList.add("animate__animated");
        refPan6.classList.add("animate__fadeInRight");
    }
}