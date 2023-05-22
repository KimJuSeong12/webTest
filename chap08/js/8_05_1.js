function divCreate() {
    let newDiv = document.createElement(`div`);
    newDiv.setAttribute(`id`, `newDivId`);
    newDiv.innerHTML = `새로 생성된 DIV입니다.`;
    newDiv.style.backgroundColor = `yellow`;
    newDiv.onclick = deleteDiv;
    document
        .body
        .appendChild(newDiv);
}

function deleteDiv() {
    const deleteDiv = document.querySelector(`div`);
    deleteDiv.remove();
}