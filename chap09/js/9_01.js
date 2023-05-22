let p;
function mouseEvent() {
    p = document.querySelector(`#pEvent`);
    p.addEventListener(`mouseover`, function () {
        this.style.backgroundColor = `orchid`;
    });
    p.addEventListener(`mouseout`, function () {
        this.style.backgroundColor = `white`;
    });

    // p.onmouseover = function() {     this.style.backgroundColor = `orchid`; };
    // p.onmouseout = function() {     this.style.backgroundColor = `white`; };
}

function pEvent1() {
    // const p = document.querySelector(`#pEvent`);
    p.style.backgroundColor = `orchid`;
}

function pEvent2() {
    // const p = document.querySelector(`#pEvent`);
    p.style.backgroundColor = `white`;
}
