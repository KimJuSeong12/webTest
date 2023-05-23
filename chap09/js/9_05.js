document.addEventListener(`DOMContentLoaded`, () => {
    const process = document.querySelector(`#process`)
    const result = document.querySelector(`#result`)
    const button = document.querySelector(`input[type=button]`)

    button.addEventListener(`click`, () => {
        result.value = eval(process.value)
    })
})