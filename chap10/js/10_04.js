document.addEventListener(`DOMContentLoaded`, () => {
    //객체변수선언
    const h2 = document.querySelector(`h2`)
    const printLogo = document.querySelector(`#printLogo`)
    //기능
    setInterval(`autoScroll()`, 2000)
    //이벤트등록 및 핸들러처리
    h2.addEventListener(`click`, () => {
        window.print()
    })
    //회사로고를 보이는 기능을 구현
    window.addEventListener(`beforeprint`, () => {
      printLogo.style.display = `block`
    })
    //회사로고를 보이지 않는 기능을 구현
    window.addEventListener(`afterprint`, () => {
      printLogo.style.display = `none`
    })
})

function autoScroll() {
    window.scrollBy(0, 10)
}