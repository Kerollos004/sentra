//change links classes 
let links = document.querySelectorAll(".link")
links.forEach(link => {
    link.addEventListener("click", removeActiveMenu)
    link.addEventListener("click", changeClass)
})
function changeClass() {
    links.forEach(link => {
        link.classList.remove("active")
        this.classList.add("active")
    })
}
//toggle active menu
let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
menuBtn.onclick = () => {
    menuBtn.classList.toggle("active")
    menu.classList.toggle("active")
}
function removeActiveMenu() {
    menuBtn.classList.remove("active")
    menu.classList.remove("active")
}
//make a counter 
let counters = document.querySelectorAll(".counter-def")
function counter(el) {
    let num = el.dataset.num
    let intv = setInterval(() => {
        el.textContent++
        if (el.textContent == num) {
            clearInterval(intv)
        }
    }, 1000/num)
}
counters.forEach(count => {
    counter(count)
})
// make a swiper
var homeSwipe = new Swiper(".home-swiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    draggable: true,
    autoplay: {
        delay:3000,
        loop:true,
    },
});
//features swiper
var featuresSwiper = new Swiper(".features-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    draggable: true,
    autoplay: {
        loop: true,
        dalay:3000,
    },
    breakpoints: {
        // when window width is >= 300px
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
        slidesPerView: 2,
        spaceBetween: 30
        },
        // when window width is >= 640px
        950: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    }
});

//scroll classes
let sections = document.querySelectorAll("section")

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY
        let offset = section.offsetTop
        let height = section.offsetHeight
        if (top > offset -250 && top < offset + height) {
            links.forEach(link => {
                link.classList.remove("active")
                let linkAtrr = link.getAttribute("data-top")
                let secAttr = section.getAttribute("data-height")
                if (linkAtrr == secAttr) {
                    link.classList.add("active")
                }
            })
        }
    });
}
//filter all data
let headlines = document.querySelectorAll(".headline")
let blogBoxs = document.querySelectorAll(".blog-boxs")

headlines.forEach(line => {
    line.addEventListener("click", changeLine)
    line.addEventListener("click" , filter)
});
function changeLine() {
    headlines.forEach(line => {
        line.classList.remove("active")
        this.classList.add("active")
    })
}
function filter() {
    blogBoxs.forEach(blog => {
        blog.classList.remove("active")
        document.querySelectorAll(this.dataset.filter).forEach(blog => {
            blog.classList.add("active")
        })
    })
}
//clear inputs
let inputs = document.querySelectorAll(".inp")
let clearbtn = document.querySelector(".clear-btn")

clearbtn.onclick = () => {
    inputs.forEach(inp => {
        inp.value = ""
    })
}
