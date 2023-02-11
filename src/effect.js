const effects = document.querySelector(".effects__list");
const uploadFormEffectsElement = document.querySelector(".img-upload__preview img");

effects.addEventListener('click', function (evt) {
    if (evt.target.matches(".effects__radio")) {
        console.log(evt.target.value);
        uploadFormEffectsElement.className = `effects__preview--${evt.target.value}`;
    }
});