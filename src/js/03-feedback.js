import throttle from "lodash.throttle";


const formEl = document.querySelector(".feedback-form");
const inputEl = document.querySelector(".feedback-form input");
const textareaEl = document.querySelector(".feedback-form textarea");

const FEEDBACK_KEY = "feedback-form-state";

let elements = {};

formEl.addEventListener("input", throttle(getInputText, 500));
function getInputText(evetn) {
    elements[evetn.target.name] = evetn.target.value;
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(elements));
};


function fillForm() {
    const elementsForm = localStorage.getItem(FEEDBACK_KEY);

    if (elementsForm) {
        elements = JSON.parse(elementsForm);
        textareaEl.value = elements.message || "";
        inputEl.value = elements.email || "";
    }
}
fillForm(elements);



formEl.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (inputEl.value !== "" && textareaEl.value !== "") {
        console.log(elements);
      
        localStorage.removeItem(FEEDBACK_KEY);
        ev.target.reset();
        return;
    } alert ("заповніть всі поля");
}
);




