const uploadFormElement = document.querySelector(".img-upload__form");
const submitButtonElement = uploadFormElement.querySelector(".img-upload__submit");

const blockSubmitButton = () => {
    submitButtonElement.disabled = true;
    submitButtonElement.innerHTML = "Публикация...";
}

const unblockSubmitButton = () => {
    submitButtonElement.disabled = false;
    submitButtonElement.innerHTML = "Опубликовать";
}

const setUploadFormSubmit = (onSuccess, onFail) => {
    uploadFormElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        blockSubmitButton();
        setTimeout(() => {
            unblockSubmitButton();
            onSuccess();
        }, 1000);
    });
}

export {setUploadFormSubmit};
