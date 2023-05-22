function init() {
  const btn = document.querySelector(`#btn`);
  const p = document.querySelector(`#p`);
  btn.addEventListener(`click`,function(e){
    p.innerHTML = "type: " + e.type + "<br>" 
    + "target: " + e.target + "<br>"
    + "currentTarget: " + e.currentTarget + "<br>"
    + "defaultPrevented: " + e.defaultPrevented;
  });
}