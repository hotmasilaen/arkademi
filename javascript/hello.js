document.addEventListener('click', replyOnClick)

var btn = document.getElementById('myButton');

function replyOnClick() {
    btn.innerHTML = 'Hello!'
    btn.style.backgroundColor = 'yellow'
    document.getElementById('myImage').src = 'file:///D:/arkademi/image-new-hero-comp.c0ee2441.png'
}