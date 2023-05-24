let windowId = null
document.addEventListener(`DOMContentLoaded`, () => {
    //객체변수 선언
    const img = document.querySelector(`img`)
    const button = document.querySelector(`button`)
    let timerId = null

    // 이벤트리스너 등록 및 핸들러 처리
    img.addEventListener(`click`, () => {
        timerId = setTimeout(`windowLoad('http://www.naver.com')`, 5000)
    })
    button.addEventListener(`click`, () => {
        if (timerId != null) {
            clearTimeout(timerId)
            timerId = null
        }
        if (windowId == null || windowId.closed) {
            return
        } else {
            windowId.close()
            windowId = null
        }
    })

})
// 함수
function windowLoad(url) {
    windowId = window.open(url, `kim`, `top=100,left=100,width=400,height=400`)
}