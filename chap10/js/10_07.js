document.addEventListener(`DOMContentLoaded`, () => {
    const div = document.querySelector(`#div`)
    let text = "availHeight:".fontcolor('blue') + screen.availHeight + "<br>";
    text += "availWidth:".fontcolor('blue') + screen.availWidth + "<br>";
    text += "colorDepth:".fontcolor('blue') + screen.colorDepth + "<br>";
    text += "pixelDepth:".fontcolor('blue') + screen.pixelDepth + "<br>";
    text += "height:".fontcolor('blue') + screen.height + "<br>";
    text += "width:".fontcolor('blue') + screen.width + "<br>";
    div.innerHTML = text;
})