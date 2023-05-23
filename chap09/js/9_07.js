document.addEventListener(`DOMContentLoaded`, () => {
    const sel = document.querySelector(`#sel`)
    const mySpan = document.querySelector(`#mySpan`)
    const myImg = document.querySelector(`#myImg`)
    sel.addEventListener(`change`, () => {
        const index1 = sel.selectedIndex
        myImg.src = sel
            .options[index1]
            .value
            myImg
            .addEventListener(`load`, () => {
                mySpan.innerHTML = myImg.width + "x" + myImg.height
            })
    })
})