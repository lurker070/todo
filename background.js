const body = document.querySelector("body");

const IMG_NUMBER = 3;

function handleImgLoad(){

}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `${imgNumber}.jpg`;
    image.classList.add("bgimage");
    body.appendChild(image);
    image.addEventListener("loadend",handleImgLoad);
}

function genRandom(){
    const number = Math.ceil(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();