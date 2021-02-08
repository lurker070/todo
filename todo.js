const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    notToDoToday = document.querySelector(".notToDoToday"),
    toDoToday = document.querySelector(".toDoToday");
    // toDoModal = document.querySelector(".modal_setTime"),
    // modalInput = toDoModal.querySelector(".model_input--time");

const TODOS_LS = 'toDos';

const SHOWING_TD = "print";

const SHOWING_MD = "print";

let toDos = [];

function paintToDoToday(){
    toDoToday.classList.remove(SHOWING_TD);
    notToDoToday.classList.add(SHOWING_TD);
}

function removeToDoToday(){
    notToDoToday.classList.remove(SHOWING_TD);
    toDoToday.classList.add(SHOWING_TD);
    toDoToday.innerText = "오늘의 할 일이에요"
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const parsedToDos = JSON.parse(loadedToDos);
    let lengthToDos = 0;
    if (loadedToDos === null){
        lengthToDos = 0;
    } else {
        lengthToDos = parsedToDos.length;
    };
    if (lengthToDos === 0){
        paintToDoToday();
    };
}

let idNumbers = 1;


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.classList.add("far");
    delBtn.classList.add("fa-check-circle");
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = idNumbers;
    idNumbers += 1;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: toDos.length +1
    };
    toDos.push(toDoObj);
    removeToDoToday(); 
    saveToDos();
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const parsedToDos = JSON.parse(loadedToDos);
    let lengthToDos = 0;
    if (loadedToDos === null){
        lengthToDos = 0;
    } else {
        lengthToDos = parsedToDos.length;
    };
    if (lengthToDos !== 0){
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    } else{
        paintToDoToday();
    };
}

function setTime(){
    toDoModal.classList.add(SHOWING_MD);
    const timeValue = modalInput.value;
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();