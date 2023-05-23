document.addEventListener(`DOMContentLoaded`, () => {
    let counter = 0
    const listener = () => {
        header.innerText = `클릭 횟수: ${++ counter}`
    }
    const header = document.createElement(`h1`)
    const p = document.createElement(`p`)
    const connectButton = document.createElement(`button`)
    const disconnectButton = document.createElement(`button`)

    header.innerText = `클릭 횟수: 0`
    p.innerText = `이벤트 연결 상태: 해제`
    connectButton.innerText = `이벤트 연결 버튼`
    disconnectButton.innerText = `이벤트 해제 버튼`

    header.style.userSelect = `none`
    p.style.userSelect = `none`

    document
        .body
        .appendChild(header)
    document
        .body
        .appendChild(connectButton)
    document
        .body
        .appendChild(disconnectButton)
    document
        .body
        .appendChild(p)

    connectButton.addEventListener(`click`, () => {
        header.addEventListener(`click`, listener)
        p.innerText = `이벤트 연결 상태: 연결`
    })

    disconnectButton.addEventListener(`click`, () => {
        header.removeEventListener(`click`, listener)
        p.innerText = `이벤트 연결 상태: 해제`
    })
})