import { sendData } from "./api";

const blockSubmitButton = () => {
    click.disabled = true;
    click.innerHTML = "Отправка...";
}
const unblockSubmitButton = () => {
    click.innerHTML = "Отправить";
    input.value = '';
}

const click = document.querySelector(".big-picture [type=submit]");
const input = document.querySelector(".social__footer-text");
const formInput = document.querySelector(".social__footer");
const formPicture = document.querySelector(".img-upload__form");

console.log(formInput);

console.log(click);

input.addEventListener('input', function (evt) {
    if (evt.target.value) {
     click.disabled = false
    } else {
     click.disabled = true
    }
});

formInput.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const formData = new FormData(formInput);
    blockSubmitButton();
    setTimeout(() => {
        sendData("http://localhost:80/comments", formData);
        unblockSubmitButton();
    },1000);
});

formPicture.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const formData = new FormData(formPicture);
    sendData("http://localhost:80/pictures", formData);
});