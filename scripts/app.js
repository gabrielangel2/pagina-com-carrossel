let time = 2000,
    currentIndex = 0,
    images = document.querySelectorAll('#imagens img'),
    max = images.length

function nextImage() {

    currentIndex++
    if (currentIndex >= max) {
        currentIndex = 0
    }
    images[currentIndex].classList.add('selected')

}


function start() {
    
    setInterval(() => {
        /* troca de imagem */
        nextImage()
    }, time)
}
window.addEventListener('load', start)