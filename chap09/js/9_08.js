document.addEventListener(`DOMContentLoaded`, () => {
    // 객체참조변수선언
    const img = document.querySelector(`img`)
    let count = 0
    // 문자열 배열 객체
    let srcArray = [
        "img/Penguins.png",
        "img/Lighthouse.png",
        "img/Chrysanthemum.png",
        "img/Desert.png",
        "img/Hydrangeas.png",
        "img/Jellyfish.png",
        "img/Koala.png",
        "img/Tulips.png"
    ];
    // 이미지 객체 배열
    let imgArray = new Array()
    for (let i = 0; i < srcArray.length; i++) {
        imgArray[i] = new Image();
        imgArray[i].src = srcArray[i]
    }
    // 이미지 이벤트리스너 등록 및 핸들러 처리
    img.addEventListener(`click`, () => {
        count++
        count %= srcArray.length
        img.src = imgArray[count]
            .src
            img
            .addEventListener(`load`, () => {
                let imgInfo = `width = ${img.width}, height = ${img.height}`
                const div = document.querySelector(`div`)
                div.innerHTML = imgInfo
                document.body.appendChild(div)
            })
    })
})