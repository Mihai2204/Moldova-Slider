const sliderMain = new Swiper('.slider_main', {
    mousewheel:true,
    freeMode:true,
    centeredSlides:true,
    parallax:true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680:{
            slidesPerView:3.5,
            spaceBetween:60
        }
    }
})

const sliderBg = new Swiper('.slider_bg', {
    mousewheel:true,
    freeMode:true,
    centeredSlides:true,
    parallax:true,
})

sliderMain.controller.control = sliderBg


let desc = document.querySelector('.description')
sliderMain.on('slideChange', e =>{
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})