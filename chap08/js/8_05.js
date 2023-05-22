function divCreate() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<strong>div</strong> 태그가 만들어졌습니다.";
    newDiv.style.color = `red`;
    newDiv.style.backgroundColor = `yellow`;
    newDiv.setAttribute(`class`, `newdivClass`);
    newDiv.style.border = `1px dotted red`;
    newDiv.style.width = `300px`;
    newDiv.style.height = `200px`;
    newDiv.style.margin = `10px`;
    newDiv.style.textAlign = `center`;

    let p = document.querySelector(`#pTag`);
    p.appendChild(newDiv);
}

function divDelete() {
    const div = document.querySelector(`.newdivClass`);
    let pTag = div.parentElement;
    // div.remove();
    pTag.removeChild(div);
}