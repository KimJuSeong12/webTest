// 1번째 방법
window.onload = () => {

}
// 2번째 방법
document.addEventListener(`DOMContentLoaded`, () => {
    document.oncontextmenu = () => {
      alert(`우클릭 금지`)
      return false
    }
})