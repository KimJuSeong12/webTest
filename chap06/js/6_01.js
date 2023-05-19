function over(obj, type) {
    if (obj != null && type == "1") {
        obj.src = './media/banana.png';
    } else if (obj != null && type == "2") {
        obj.src = './media/apple.png';
    }
    return;
}
function out(obj, type) {
    if (obj != null && type == "1") {
        obj.src = './media/apple.png';
    } else if (obj != null && type == "2") {
        obj.src = './media/banana.png';
    }
    return;
}