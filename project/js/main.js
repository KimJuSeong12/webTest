document.addEventListener(`DOMContentLoaded`, () => {
    // 1. 객체변수 선언
    const slideshow = document.querySelector(`.slideshow`)
    const slideshowSlides = document.querySelector(`.slideshow_slides`)
    const slideArray = document.querySelectorAll(`.slideshow_slides a`)
    const prev = document.querySelector(`.prev`)
    const next = document.querySelector(`.next`)
    const indicatorArray = document.querySelectorAll(`.indicator a`)
    let currentIndex = 0
    let intervalId = null
    const SLIDE_COUNT = slideArray.length

    // 2.1 기능 슬라이드 사진을 일렬로 배치
    for (let i = 0; i < slideArray.length; i++) {
        slideArray[i].style.left = `${i * 100}%`
    }
    // 2.2 맨처음 슬라이드
    gotoSlide(0)
    // 2.3 자동슬라이드 전환 타이머설정(3초마다)
    startSetInterval()

    // 3. 이벤트리스너 등록 및 핸들러 처리
    // 3.1 prev와next nav 기능 설정
    prev.addEventListener(`click`, (e) => {
        e.preventDefault()
        if (currentIndex == 0) {
            currentIndex = 3
        } else {
            currentIndex = currentIndex - 1
        }
        gotoSlide(currentIndex)
    })
    next.addEventListener(`click`, (e) => {
        e.preventDefault()
        if (currentIndex == 3) {
            currentIndex = 0
        } else {
            currentIndex = currentIndex + 1

        }
        gotoSlide(currentIndex)
    })

    // 3.2 indicator 이벤트리스너 등록 및 핸들러 처리
    indicatorArray.forEach((indicator, index) => {
        indicator.addEventListener(`click`, (e) => {
            e.preventDefault();
            gotoSlide(index)
        })
    })

    // 3.3 슬라이드영역에 마우스가 enter 이벤트리스너 및 핸들러
    slideshow.addEventListener(`mouseover`, () => {
        clearInterval(intervalId)
    })
    slideshow.addEventListener(`mouseout`, () => {
        startSetInterval()
    })

    // 4.1 함수처리(슬라이드변환)
    function gotoSlide(index) {
        currentIndex = index
        slideshowSlides.style.left = `${currentIndex * -100}%`
        indicatorArray.forEach((indicator) => {
            indicator
                .classList
                .remove(`active`)
        })
        indicatorArray[currentIndex]
            .classList
            .add(`active`)
    }

    //4.2 자동타이머설정 (setInterval)
    function startSetInterval() {
        intervalId = setInterval(() => {
            let index = (currentIndex + 1) % SLIDE_COUNT
            gotoSlide(index)
        }, 3000);
    }
})