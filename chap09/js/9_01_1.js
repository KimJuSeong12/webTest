function init() {
    //button을 6번방식으로 처리
    const b = document.querySelector(`#b`);
    b.addEventListener(`click`, function (e) {
        alert(e.type);
    });

    //p를 4번방식으로 처리
    const p = document.querySelector(`#p`);
    p.onmouseover = function (e) {
        alert(e.type);
    }
}
