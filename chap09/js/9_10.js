document.addEventListener(`DOMContentLoaded`, () => {
    const city = document.querySelectorAll(`input[name=city]`)
    const button = document.querySelector(`#button`)
    let found = ``

    button.addEventListener(`click`, () => {
        for (let i = 0; i < city.length; i++) {
            if (city[i].checked == true) {
                found = city[i]
            }
        }
        if (found != null) {
            alert(`${found.value}이 선택되었습니다.`)
        }
    })
})