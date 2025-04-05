function toggleNav() {
    const nav = document.getElementById("nav");
    const header2 = document.querySelector(".header2");

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        header2.style.marginTop = "100vh"; // اجعل `header2` ينزل أسفل القائمة
    } else {
        header2.style.marginTop = "0px"; // أعد `header2` لمكانه الطبيعي عند إغلاق القائمة
    }
}





/* الاسلايدر */
var swiper = new Swiper(".mySwiper", {
    loop: false,
   
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
/* انميشن للي تحت الاسليدر */
document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("logo-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });
    observer.observe(section);
});