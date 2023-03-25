const uploadFormEffectsElement = document.querySelector(".img-upload__preview img");
const uploadEffectWrapper = document.querySelector(".img-upload__effect-level");
const uploadFormElement = document.querySelector(".img-upload__overlay");
const fileInputElement = document.querySelector(".img-upload__input");
const photo = document.querySelector(".img-upload__preview  img");
const effects = document.querySelectorAll(".effects__preview");
const uploadFormCloseElement = document.querySelector(".img-upload__cancel");
// const comment1 = document.querySelector(".text__hashtags");
// const comment2 = document.querySelector(".text__description");

const renderUploadPreview = (file) => {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        photo.src = reader.result;
        effects.forEach((effect) => {
            effect.style.backgroundImage = `url(${reader.result})`;
        });
    });
    
    reader.readAsDataURL(file);
}

const openUploadModal = () => {
    renderUploadPreview(fileInputElement.files[0]);
    uploadFormElement.classList.remove('hidden');
    uploadFormCloseElement.addEventListener('click', closeUploadModal);
    
}

const closeUploadModal = () => {
    uploadFormElement.classList.add('hidden');
    uploadEffectWrapper.classList.add('hidden');
    uploadFormEffectsElement.className = `effects__preview--none`;
    uploadFormCloseElement.removeEventListener('click', closeUploadModal);
}

// comment1.addEventListener('input', function () {
//     console.log(comment1.value);
// });

// comment2.addEventListener('input', function () {
//     console.log(comment2.value);
// });

export {openUploadModal};
