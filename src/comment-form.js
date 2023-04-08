// import { sendData } from "./api";

const commentFormElement = document.querySelector(".big-picture__social form");
const submitButtonElement = commentFormElement.querySelector("[type=submit]");
const commentInputElement = document.querySelector(".social__footer-text");

const blockSubmitButton = () => {
    submitButtonElement.disabled = true;
    submitButtonElement.innerHTML = "Отправка...";
}

const unblockSubmitButton = () => {
    submitButtonElement.disabled = false;
    submitButtonElement.innerHTML = "Отправить";
    commentInputElement.value = '';
}

commentInputElement.addEventListener('input', (evt) => {
    if (evt.target.value) {
        submitButtonElement.disabled = false;
    } else {
        submitButtonElement.disabled = true;
    }
});

const setCommentFormSubmit = () => {
    commentFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(commentFormElement);
        blockSubmitButton();
        setTimeout(() => {
            // sendData("http://localhost:80/comments", formData);
            unblockSubmitButton();
        }, 1000);
    });
}

export {setCommentFormSubmit};

