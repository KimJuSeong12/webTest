document.addEventListener(`DOMContentLoaded`, () => {
    const sel = document.querySelector(`select`)
    const img = document.querySelector(`#fruit`)
    sel.addEventListener(`change`, () => {
        img.src = sel[sel.selectedIndex].value
    })
})