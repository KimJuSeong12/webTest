function openWindow() {
    const newWindow = window.open(
        "",
        "myWindow",
        "toolbar = yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=4" +
                "00"
    );
    const textArea = document.querySelector("textarea");
    newWindow
        .document
        .open();
    newWindow
        .document
        .write(textArea.value);
    newWindow
        .document
        .close();
}