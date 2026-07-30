/*==================================================
                NAVBAR
==================================================*/

const header = document.querySelector(".header");

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

const mobileNav = document.querySelector(".mobile-nav");

const overlay = document.querySelector(".menu-overlay");

const mobileLinks = document.querySelectorAll(".mobile-menu-list a");

/*==================================================
                MENU STATE
==================================================*/

let menuOpen = false;

/*==================================================
                OPEN MENU
==================================================*/

function openMenu(){

    menuOpen = true;

    menuToggle.classList.add("active");

    mobileMenu.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("no-scroll");

    menuToggle.setAttribute("aria-expanded","true");
menuToggle.style.opacity = "0";
menuToggle.style.pointerEvents = "none";
}

/*==================================================
                CLOSE MENU
==================================================*/

function closeMenu(){

    menuOpen = false;

    menuToggle.classList.remove("active");

    mobileMenu.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("no-scroll");

    menuToggle.setAttribute("aria-expanded","false");

    menuToggle.style.opacity = "1";
menuToggle.style.pointerEvents = "auto";
}

/*==================================================
                TOGGLE
==================================================*/

function toggleMenu(){

    menuOpen ? closeMenu() : openMenu();

}

/*==================================================
                EVENTS
==================================================*/

menuToggle.addEventListener("click",toggleMenu);

overlay.addEventListener("click",closeMenu);

mobileLinks.forEach(link=>{

    link.addEventListener("click",closeMenu);

});

/*==================================================
            OUTSIDE CLICK
==================================================*/

mobileMenu.addEventListener("click",(e)=>{

    if(!mobileNav.contains(e.target)){

        closeMenu();

    }

});

/*==================================================
                ESC KEY
==================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape" && menuOpen){

        closeMenu();

    }

});

/*==================================================
            DESKTOP RESIZE
==================================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>992 && menuOpen){

        closeMenu();

    }

});

/*==================================================
            BODY SCROLL LOCK
==================================================*/

document.body.classList.remove("no-scroll");
/*==================================================
            STICKY NAVBAR
==================================================*/

function handleNavbar() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", handleNavbar, {
    passive: true
});

handleNavbar();

/*==================================================
            SMOOTH SCROLL
==================================================*/

const allLinks = document.querySelectorAll(
    '.nav-link, .mobile-menu-list a'
);

allLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (!href.startsWith("#")) return;

        const section = document.querySelector(href);

        if (!section) return;

        e.preventDefault();

        const offset = header.offsetHeight + 18;

        const targetPosition =
            section.offsetTop - offset;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section[id]");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            updateActiveLinks(id);

        });

    },

    {

        root: null,

        threshold: 0.35,

        rootMargin: "-10% 0px -55% 0px"

    }

);

/*==================================================
            OBSERVE SECTIONS
==================================================*/

sections.forEach(section => {

    observer.observe(section);

});

/*==================================================
        UPDATE ACTIVE LINKS
==================================================*/

function updateActiveLinks(id) {

    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.classList.toggle(

                "active",

                link.getAttribute("href") === `#${id}`

            );

        });

    document
        .querySelectorAll(".mobile-menu-list a")
        .forEach(link => {

            link.classList.toggle(

                "active",

                link.getAttribute("href") === `#${id}`

            );

        });

}

/*==================================================
            INITIAL STATE
==================================================*/

window.addEventListener("load", () => {

    handleNavbar();

});
/*==================================================
            HAMBURGER MORPH
==================================================*/

const lines = menuToggle.querySelectorAll(".line");

function animateHamburger(isOpen){

    if(isOpen){

        menuToggle.classList.add("active");

    }else{

        menuToggle.classList.remove("active");

    }

}

/*==================================================
            MENU ANIMATION
==================================================*/

const menuItems = document.querySelectorAll(".mobile-menu-list li");

function staggerMenuItems(open){

    menuItems.forEach((item,index)=>{

        if(open){

            item.style.transitionDelay=`${index * 70}ms`;

            item.classList.add("show");

        }else{

            item.style.transitionDelay="0ms";

            item.classList.remove("show");

        }

    });

}

/*==================================================
            OVERRIDE OPEN
==================================================*/

const originalOpenMenu = openMenu;

openMenu = function(){

    originalOpenMenu();

    animateHamburger(true);

    staggerMenuItems(true);

}

/*==================================================
            OVERRIDE CLOSE
==================================================*/

const originalCloseMenu = closeMenu;

closeMenu = function(){

    originalCloseMenu();

    animateHamburger(false);

    staggerMenuItems(false);

}

/*==================================================
            CLICK SAFETY
==================================================*/

menuToggle.addEventListener("click",(e)=>{

    e.stopPropagation();

});

/*==================================================
            WINDOW LOAD
==================================================*/

window.addEventListener("load",()=>{

    handleNavbar();

});

/*==================================================
            PAGE RESIZE
==================================================*/

let resizeTimer;

window.addEventListener("resize",()=>{

    clearTimeout(resizeTimer);

    resizeTimer=setTimeout(()=>{

        if(window.innerWidth>992){

            closeMenu();

        }

    },150);

});
const closeBtn = document.querySelector(".menu-close");

closeBtn.addEventListener("click", closeMenu)

/*==================================================
            END
==================================================*/
// =========================
// HERO PREMIUM ANIMATION
// =========================


document.addEventListener("DOMContentLoaded", () => {


    const heroItems = document.querySelectorAll(
        ".hero-tag, .hero-content h1, .hero-content p, .hero-actions, .hero-metrics"
    );


    heroItems.forEach((item, index) => {

        item.style.opacity = "0";

        item.style.transform = "translateY(35px)";


        setTimeout(() => {

            item.style.transition =
            "all 0.8s cubic-bezier(.16,1,.3,1)";


            item.style.opacity = "1";

            item.style.transform =
            "translateY(0)";


        }, index * 150);


    });



});





// =========================
// HERO IMAGE PARALLAX
// =========================


const heroImage = document.querySelector(".hero-bg img");


if(heroImage){


    window.addEventListener("scroll", () => {


        let scrollValue = window.scrollY;


        if(scrollValue < 600){


            heroImage.style.transform =
            `scale(1.08) translateY(${scrollValue * 0.08}px)`;


        }


    });


}
const hero = document.querySelector(".hero");
// const heroImage = document.querySelector(".hero-bg img");


if(hero && heroImage){

hero.addEventListener("mousemove",(e)=>{

    const x = (e.clientX / window.innerWidth - 0.5) * 15;
    const y = (e.clientY / window.innerHeight - 0.5) * 15;


    heroImage.style.transform =
    `scale(1.08) translate(${x}px, ${y}px)`;

});


hero.addEventListener("mouseleave",()=>{

    heroImage.style.transform =
    "scale(1.08) translate(0,0)";

});

}
// =========================
// ABOUT SCROLL REVEAL
// =========================


const aboutContent = document.querySelector(".about-content");
const aboutImage = document.querySelector(".about-image");


if(aboutContent && aboutImage){


    aboutContent.classList.add("reveal-ready");
    aboutImage.classList.add("reveal-ready");



    const aboutObserver = new IntersectionObserver((entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                aboutContent.classList.add("reveal-show");


                setTimeout(()=>{

                    aboutImage.classList.add("reveal-show");

                },250);



                aboutObserver.disconnect();

            }


        });


    },{

        threshold:0.25

    });



    aboutObserver.observe(aboutContent);


}
/* ================= SERVICES ANIMATION ================= */


const serviceItems = document.querySelectorAll(".service-item");


const serviceObserver = new IntersectionObserver(
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                serviceObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold:0.2
    }

);



serviceItems.forEach(item=>{

    serviceObserver.observe(item);

});
// ================= SERVICE IMAGE PARALLAX =================


const serviceImages = document.querySelectorAll(".service-image img");


window.addEventListener("scroll", ()=>{


    serviceImages.forEach(img=>{


        const section = img.closest(".service-item");

        const rect = section.getBoundingClientRect();


        const windowHeight = window.innerHeight;


        if(rect.top < windowHeight && rect.bottom > 0){


            const speed = 0.08;


            const movement = 
            (windowHeight - rect.top) * speed;


            img.style.transform =
            `scale(1.08) translateY(${movement}px)`;

        }


    });


});
/* ================= MEMBERSHIP ANIMATION ================= */


const pricingCards = document.querySelectorAll(".pricing-card");


const pricingObserver = new IntersectionObserver(

    (entries)=>{

        entries.forEach((entry,index)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("show");


                pricingObserver.unobserve(entry.target);


            }


        });


    },

    {
        threshold:0.2
    }

);



pricingCards.forEach((card,index)=>{


    card.style.transitionDelay = `${index * 0.15}s`;

    pricingObserver.observe(card);


});
/* ===========================
   TESTIMONIALS CAROUSEL
=========================== */

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".testimonial-card");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
let autoPlay;



/* ===========================
   UPDATE
=========================== */

function updateCarousel(){

    track.style.transform =
    `translateX(-${currentIndex * 100}%)`;



    cards.forEach((card)=>{

        card.classList.remove("active");

    });



    dots.forEach((dot)=>{

        dot.classList.remove("active");

    });



    cards[currentIndex].classList.add("active");

    dots[currentIndex].classList.add("active");

}



/* ===========================
   NEXT
=========================== */

function nextSlide(){

    currentIndex++;

    if(currentIndex >= cards.length){

        currentIndex = 0;

    }

    updateCarousel();

}



/* ===========================
   PREVIOUS
=========================== */

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = cards.length - 1;

    }

    updateCarousel();

}



/* ===========================
   BUTTONS
=========================== */

nextBtn.addEventListener("click",()=>{

    nextSlide();

    restartAutoPlay();

});


prevBtn.addEventListener("click",()=>{

    prevSlide();

    restartAutoPlay();

});



/* ===========================
   DOTS
=========================== */

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        currentIndex = index;

        updateCarousel();

        restartAutoPlay();

    });

});



/* ===========================
   AUTOPLAY
=========================== */

function startAutoPlay(){

    autoPlay = setInterval(()=>{

        nextSlide();

    },5000);

}



function stopAutoPlay(){

    clearInterval(autoPlay);

}



function restartAutoPlay(){

    stopAutoPlay();

    startAutoPlay();

}



startAutoPlay();



/* ===========================
   PAUSE ON HOVER
=========================== */

const slider = document.querySelector(".testimonial-carousel");

slider.addEventListener("mouseenter",stopAutoPlay);

slider.addEventListener("mouseleave",startAutoPlay);




/* ===========================
   KEYBOARD
=========================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextSlide();

        restartAutoPlay();

    }

    else if(e.key==="ArrowLeft"){

        prevSlide();

        restartAutoPlay();

    }

});



/* ===========================
   MOBILE SWIPE
=========================== */

let startX = 0;
let endX = 0;

track.addEventListener("touchstart",(e)=>{

    startX = e.changedTouches[0].clientX;

});


track.addEventListener("touchend",(e)=>{

    endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        nextSlide();

        restartAutoPlay();

    }

    else if(endX - startX > 50){

        prevSlide();

        restartAutoPlay();

    }

});



/* ===========================
   INITIALIZE
=========================== */

updateCarousel();
/* ===========================
   TRAINERS REVEAL
=========================== */

const trainerCards = document.querySelectorAll(".trainer-card");

const trainerObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index * 180);

            trainerObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

trainerCards.forEach((card)=>{

    trainerObserver.observe(card);

});



/* ===========================
   TRAINER CARD TILT
=========================== */

trainerCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        if(window.innerWidth <= 768) return;

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 10;

        const rotateX = ((0.5 - y / rect.height)) * 10;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "";

    });

});



/* ===========================
   SOCIAL ICON RIPPLE
=========================== */

const socialLinks = document.querySelectorAll(".trainer-social a");

socialLinks.forEach((link)=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform = "translateY(-6px) scale(1.12)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform = "";

    });

});
/* ==========================================
   CONTACT SECTION
========================================== */

const contactContent = document.querySelector(".contact-content");
const contactForm = document.querySelector(".contact-form");

const contactObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.25
});

contactObserver.observe(contactContent);
contactObserver.observe(contactForm);



/* ==========================================
   CONTACT FORM
========================================== */

const form = document.getElementById("contactForm");
const submitBtn = document.querySelector(".contact-btn");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    submitBtn.disabled = true;

    submitBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Sending...
    `;

    /* Fake Delay
       Remove after EmailJS integration */

    setTimeout(()=>{

        alert("Form is ready for EmailJS integration.");

        form.reset();

        submitBtn.disabled = false;

        submitBtn.innerHTML = "Send Message";

    },1800);

});
/* ==========================================
   SMOOTH FLOATING EFFECT
========================================== */
const ctaContent = document.querySelector(".cta-content");

function animateCTA() {

    if (!ctaContent) return;

    ctaContent.classList.add("show");

}
let ctaAnimationFrame;

function animateCTA(){

    if(!ctaContent.classList.contains("show")){

        ctaAnimationFrame =
        requestAnimationFrame(animateCTA);

        return;

    }

    const time = Date.now() * 0.001;

    const floatY = Math.sin(time) * 6;

    ctaContent.style.transform =
    `translateY(${floatY}px)`;

    ctaAnimationFrame =
    requestAnimationFrame(animateCTA);

}

animateCTA();
/* ==========================================
   FOOTER REVEAL ANIMATION
========================================== */

const footerColumns = document.querySelectorAll(".footer-column");

const footerObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index * 180);

            footerObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

footerColumns.forEach(column=>{

    footerObserver.observe(column);

});



/* ==========================================
   FOOTER SOCIAL HOVER
========================================== */

const footerSocial = document.querySelectorAll(".footer-social a");

footerSocial.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform =
        "translateY(-8px) rotate(8deg) scale(1.08)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform = "";

    });

});



/* ==========================================
   FOOTER LINKS HOVER
========================================== */

const footerLinks = document.querySelectorAll(".footer-column ul li a");

footerLinks.forEach(link=>{

    link.addEventListener("mouseenter",()=>{

        link.style.paddingLeft = "10px";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.paddingLeft = "";

    });

});
/* ================= BMI CALCULATOR ================= */

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const bmiValue = document.getElementById("bmiValue");
const bmiCategory = document.getElementById("bmiCategory");

const progressFill = document.getElementById("progressFill");

const idealWeight = document.getElementById("idealWeight");
const waterIntake = document.getElementById("waterIntake");
const dailyCalories = document.getElementById("dailyCalories");

const bmiTip = document.getElementById("bmiTip");


calculateBtn.addEventListener("click", calculateBMI);

resetBtn.addEventListener("click", resetBMI);



function calculateBMI(){

    const height = parseFloat(heightInput.value);

    const weight = parseFloat(weightInput.value);

    if(isNaN(height) || isNaN(weight) || height<=0 || weight<=0){

        alert("Please enter valid height and weight.");

        return;

    }

    const bmi = weight / ((height/100)*(height/100));

    animateBMI(bmi);

}



function animateBMI(bmi){

    let start=0;

    const duration=900;

    const increment=bmi/(duration/16);

    const timer=setInterval(()=>{

        start+=increment;

        if(start>=bmi){

            start=bmi;

            clearInterval(timer);

        }

        bmiValue.textContent=start.toFixed(1);

    },16);

    showResult(bmi);

}



function showResult(bmi){

    let category="";

    let color="#ffd60a";

    let tip="";



    if(bmi<18.5){

        category="Underweight";

        color="#3fa9ff";

        tip="Increase healthy calories and include strength training.";

    }

    else if(bmi<25){

        category="Healthy";

        color="#39d353";

        tip="Excellent! Maintain your current lifestyle.";

    }

    else if(bmi<30){

        category="Overweight";

        color="#ff9800";

        tip="Add more cardio and monitor calorie intake.";

    }

    else{

        category="Obese";

        color="#ff4d4d";

        tip="Consult a fitness professional and follow a structured plan.";

    }

    bmiCategory.textContent=category;

    bmiCategory.style.color=color;

    progressFill.style.width=Math.min((bmi/40)*100,100)+"%";

    progressFill.style.background=color;



    const min=(18.5*((heightInput.value/100)**2)).toFixed(1);

    const max=(24.9*((heightInput.value/100)**2)).toFixed(1);

    idealWeight.textContent=min+" - "+max+" kg";



    waterIntake.textContent=(weightInput.value*0.035).toFixed(1)+" L";



    const calories=Math.round(weightInput.value*33);

    dailyCalories.textContent=calories+" kcal";



    bmiTip.textContent=tip;

}



function resetBMI(){

    heightInput.value="";

    weightInput.value="";



    bmiValue.textContent="--";



    bmiCategory.textContent="Your BMI";

    bmiCategory.style.color="#ffffff";



    progressFill.style.width="0%";

    progressFill.style.background="#ffd60a";



    idealWeight.textContent="--";

    waterIntake.textContent="--";

    dailyCalories.textContent="--";



    bmiTip.textContent="Enter your height and weight to calculate your BMI.";

}
/* ================= BRANCH SELECTOR ================= */

const branchSelector = document.getElementById("branchSelector");
const branchSelect = document.getElementById("branchSelect");
const continueBtn = document.getElementById("continueBtn");

const savedBranch = sessionStorage.getItem("selectedBranch");

if (savedBranch) {
    branchSelector.style.display = "none";
}

continueBtn.disabled = true;

continueBtn.addEventListener("click", () => {

    const branch = branchSelect.value;

    if (!branch) {
        alert("Please select your branch.");
        return;
    }

    sessionStorage.setItem("selectedBranch", branch);

    branchSelector.style.display = "none";

});

branchSelect.addEventListener("change", () => {

    continueBtn.disabled = branchSelect.value === "";

});


/* ================= WHATSAPP MEMBERSHIP ================= */

const pricingButtons = document.querySelectorAll(".pricing-btn");

const branchNumbers = {

    Clifton: "923212283944",

    DHA: "923002222222",

    Gulshan: "923003333333",

    Nazimabad: "923004444444"

};

pricingButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

      const selectedBranch = sessionStorage.getItem("selectedBranch");
        if (!selectedBranch) {

            alert("Please select your branch first.");

            branchSelector.style.display = "flex";

            return;

        }

        const number = branchNumbers[selectedBranch];

        const selectedPlan = this.dataset.plan;

        const bmi = document.getElementById("bmiValue").innerText.trim();

        const category = document.getElementById("bmiCategory").innerText.trim();

        let bmiMessage = "";

        if (bmi !== "--" && category !== "Your BMI") {

            bmiMessage = `

📊 BMI: ${bmi}

🏷️ Category: ${category}`;

        }

        const message = `Assalam-o-Alaikum,

I want to join Pure Fitness Gym.

🏢 Branch: ${selectedBranch}

💪 Selected Plan: ${selectedPlan}${bmiMessage}

Kindly share the registration process.

Thank you.`;

        const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");

    });

});