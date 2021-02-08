const clockContainer = document.querySelector(".js-clock");
const dateContainer = document.querySelector(".js-date");
const clockTitle = clockContainer.querySelector("h1");
const dateTitle = dateContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;
}

function getnow(){
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    dateTitle.innerText = `${month+1}월 ${date}일`
}

function init(){
    getTime();
    getnow();
    setInterval(getTime, 1000);
}

init();