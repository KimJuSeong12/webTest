document.addEventListener(`DOMContentLoaded`, () => {
    const text = document.querySelector(`input`)
    text.addEventListener(`keydown`, (e) => {
        let str = ``
        const div = document.querySelector(`div`)
        div.innerHTML = ``
        str += `e.key = ${e.key} <br>`
        str += `e.code = ${e.code} <br>`
        div.innerHTML = str
    })
})