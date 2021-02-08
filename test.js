const toDoModal = document.querySelector(".modal_setTime"),
    modalInput = toDoModal.querySelector(".model_input--time")
    modalSubmit = toDoModal.querySelector(".submit");

const timeValue = modalInput.value;

modalSubmit.addEventListener("click", function (){
    console.log(timeValue);
})
