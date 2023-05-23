function init() {
    const btn = document.querySelector(`#btn`);
    const p = document.querySelector(`#p`);
    btn.addEventListener(`click`, (e) => {
        p.innerHTML = "type: " + e.type + "<br>target: " + e.target + "<br>currentTarge" +
                "t: " + e.currentTarget + "<br>defaultPrevented: " + e.defaultPrevented;
    });
}