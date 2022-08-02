let time = 2000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)


const menuList= document.getElementById('links')
menuList.style.maxHeight= '0px'

function showMenu(){
if(menuList.style.maxHeight == '0px'){
    menuList.style.maxHeight = '120px'
}else{
    menuList.style.maxHeight= '0px'
}

}

