//전역변수 객체변수선언
let setIntervalId = null
let span = null
document.addEventListener(`DOMContentLoaded`, () => {
    //객체변수저장
    span = document.querySelector(`span`)
    //기능처리
    setIntervalId = setInterval(`spanRotate()`, 200)
    //이벤트리스너 등록 및 핸들러 처리
    span.addEventListener(`click`,() => {
      clearInterval(setIntervalId)
    })
})

//함수선언
function spanRotate() {
    let str = span.innerHTML
    let firstChar = str.substr(0,1)
    let remainChars = str.substr(1,str.length)
    str = remainChars + firstChar
    span.innerHTML = str
}