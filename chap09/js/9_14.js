document.addEventListener(`DOMContentLoaded`, () => {
    // 객체변수 선언
    let position = 0
    let prevPosition = 0
    const tdArray = document.querySelectorAll(`td`)
    tdArray[position].style.backgroundColor = `orchid`

    // 이벤트리스너 등록 및 핸들러 처리
    window.addEventListener(`keydown`, (e) => {
        switch (e.key) {
            case `ArrowDown`:
                if (position / 3 >= 2) {
                    return
                } else {
                    position += 3
                    break
                }
            case `ArrowUp`:
                if (position / 3 <= 0) {
                    return
                } else {
                    position -= 3
                    break
                }
            case `ArrowLeft`:
                if (position % 3 === 0) {
                    return
                } else {
                    position--
                    break
                }
            case `ArrowRight`:
                if (position % 3 === 2) {
                    return
                } else {
                    position++
                    break
                }
        }
        tdArray[position].style.backgroundColor = `orchid`
        tdArray[prevPosition].style.backgroundColor = `white`
        prevPosition = position
    })
})
// 핸들러 함수