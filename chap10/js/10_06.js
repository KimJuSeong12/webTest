document.addEventListener(`DOMContentLoaded`, () => {
    const div = document.querySelector(`#div`)

    div.addEventListener(`click`, () => {
        let text = "<span>appCodeName</span>: " + navigator.appCodeName + "<br>";
        text += "<span>appName</span>: " + navigator.appName + "<br>";
        text += "<span>appVersion</span>: " + navigator.appVersion + "<br>";
        text += "<span>platform</span>: " + navigator.platform + "<br>";
        text += "<span>product</span>: " + navigator.product + "<br>";
        text += "<span>userAgent</span>: " + navigator.userAgent + "<br>";
        text += "<span>vendor</span>: " + navigator.vendor + "<br>";
        text += "<span>language</span>: " + navigator.language + "<br>";
        text += "<span>onLine</span>: " + navigator.onLine + "<br>";
        text += "<span>cookieEnabled</span>: " + navigator.cookieEnabled + "<br>";
        text += "<span>javaEnabled()</span>:" + navigator.javaEnabled() + "<br>";
        text += "<span>plugins.length</span>: " + navigator.plugins.length + "<br>";
        for (let j = 0; j < navigator.plugins.length; j++) {
            text += "plugins" + j + " : <blockquote>";
            text += navigator
                .plugins[j]
                .name + "<br>";
            text += "<i>" + navigator
                .plugins[j]
                .description + "</i><br>";
            text += navigator
                .plugins[j]
                .filename + "</blockquote>";
        }
        div.innerHTML = text
    })
})