let newWindow = null
document.addEventListener(`DOMContentLoaded`, () => {
    // 객체타입선언
    const select = document.querySelector(`select`)
    const button = document.querySelector(`input[type=button]`)
    // 이벤트리스너 등록 및 핸들러 처리
    button.addEventListener(`click`, () => {
        let locationValue = select
            .options[select.selectedIndex]
            .value
        newWindow = window.open(
            locationValue,
            `kim`,
            `top=100 left=100, width=600, height=600`
        )
        // window.location = locationValue
    })
})