document.addEventListener(`DOMContentLoaded`, () => {
    const hat = document.querySelector('input[name=hat]')
    const shoes = document.querySelector('input[name=shoes]')
    const bag = document.querySelector('input[name=bag]')
    const sum = document.querySelector('#sum')
    const array = document.querySelectorAll(`input[type=checkbox]`)
    let result = 0
    // 이벤트리스너 등록 및 핸들러 처리 hat.addEventListener(`click`, () => {     if (hat.checked)
    // {         result += parseInt(hat.value)     } else {         result -=
    // parseInt(hat.value)     }     sum.value = result })
    // shoes.addEventListener(`click`, () => {     if (shoes.checked) { result +=
    // parseInt(shoes.value)     } else {         result -= parseInt(shoes.value) }
    // sum.value = result }) bag.addEventListener(`click`, () => {     if
    // (bag.checked) {         result += parseInt(bag.value)     } else { result -=
    // parseInt(bag.value) }     sum.value = result })

    // -------------------------------------------------------
    // for (const chk of array) {     chk.addEventListener(`click`, () => { if
    // (chk.checked) {             result += parseInt(chk.value)         } else {
    // result -= parseInt(chk.value)         }         sum.value = result     }) }
    array.forEach((chk) => {
        chk.addEventListener(`click`, () => {
            if (chk.checked) {
                result += parseInt(chk.value)
            } else {
                result -= parseInt(chk.value)
            }
            sum.value = result
        })
    })
})