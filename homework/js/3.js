document.addEventListener(`DOMContentLoaded`,() => {
    const slideshow = document.querySelector(`.slideshow`)
    const slideshowSlides = document.querySelector(`.slideshow_slides`)
    const slideArray = document.querySelectorAll(`.slideshow_slides a`)
    const prev = document.querySelector(`.prev`)
    const next = document.querySelector(`.next`)
    let currentIndex = 0

    for (let i = 0; i < slideArray.length; i++) {
        slideArray[i].style.left = `${i * 100}%`
    }

    prev.addEventListener(`click`,() => {
        if (currentIndex == 0) {
            currentIndex = 3
        } else {
            currentIndex = currentIndex - 1
        }
        slideshowSlides.style.left = `${currentIndex * -100}%`
    })

    next.addEventListener(`click`,() => {
        if (currentIndex == 3) {
            currentIndex = 0
        } else {
            currentIndex = currentIndex + 1
        }
        slideshowSlides.style.left = `${currentIndex * -100}%`
    })
})