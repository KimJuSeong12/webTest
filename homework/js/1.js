document.addEventListener(`DOMContentLoaded`, () => {
    const header = document.createElement(`h1`)
    document
        .body
        .appendChild(header)

    let count = 0
    header.style.userSelect = `none`
    header.innerText = `클릭 횟수: ${count}`
    header.addEventListener(`click`, () => {
        count++
        header.innerText = `클릭 횟수: ${count}`
    })
})