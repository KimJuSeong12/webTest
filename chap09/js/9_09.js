document.addEventListener(`DOMContentLoaded`, () => {
    //1. 객체참조변수선언
    const inputName = document.querySelector(`input[name=name]`)
    const warning = document.querySelector(`#warning`)

    //2. 이벤트리스너등록 핸들러처리
    inputName.addEventListener(`blur`, () => {
        if (inputName.value == ``) {
            warning.innerHTML = `이름을 입력해야됩니다.`
            warning.style.color = `red`
            warning.style.fontSize = `0.7em`
            inputName.focus()
        } else {
            warning.innerHTML = ``
        }
    })
})