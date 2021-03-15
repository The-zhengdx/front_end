function showPic(picAddr, title) {
    const placeholder = document.getElementById('placeholder');
    const description = document.getElementById('description');
    placeholder.setAttribute('src', picAddr);
    description.textContent = title;
}

function countBodyChildren() {
    console.log(document.body.childNodes.length);
}

window.onload = countBodyChildren;