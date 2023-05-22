function init() {
    const al = document.querySelector(`#al`);
    al.addEventListener(`click`, checkedAl);
}
function checkedAl(e) {
    e.preventDefault();
}

function click1() {
    return confirm(`네이버로 이동하시겠습니까?`);
}