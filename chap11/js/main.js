document.addEventListener(`DOMContentLoaded`, () => {
    // 1. 객체변수 선언
    const slideshow = document.querySelector(`.slideshow`)
    const slideshowSlides = document.querySelector(`.slideshow_slides`)
    const slideArray = document.querySelectorAll(`.slideshow_slides a`)
    const prev = document.querySelector(`.prev`)
    const next = document.querySelector(`.next`)
    const indicatorArray = document.querySelectorAll(`.indicator`)
    let currentIndex = 0

    // 2. 기능 슬라이드 사진을 일렬로 배치
    for (let i = 0; i < slideArray.length; i++) {
        slideArray[i].style.left = `${i * 100}%`
    }

    // 3. 이벤트리스너 등록 및 핸들러 처리
    // 3.1 prev와next nav 기능 설정
    prev.addEventListener(`click`, () => {
        if (currentIndex == 0) {
            currentIndex = 3
        } else {
            currentIndex = currentIndex - 1

        }
        slideshowSlides.style.left = `${currentIndex * -100}%`
    })
    next.addEventListener(`click`, () => {
        if (currentIndex == 3) {
            currentIndex = 0
        } else {
            currentIndex = currentIndex + 1

        }
        slideshowSlides.style.left = `${currentIndex * -100}%`
    })
})