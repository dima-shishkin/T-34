import {onZoomInClick, onZoomOutClick} from "./zoom";
import {onSliderUpdate, onEffectsRadioChange} from "./effect";

const effects = document.querySelectorAll(".effects__preview");
const effectListElement = document.querySelector(".effects__list");
const fileInputElement = document.querySelector(".img-upload__input");
const sliderElement = document.querySelector(".effect-level__slider");
const uploadFormElement = document.querySelector(".img-upload__overlay");
const uploadFormCloseElement = document.querySelector(".img-upload__cancel");
const previewImgElement = document.querySelector(".img-upload__preview  img");
const zoonInButtonElement = document.querySelector(".scale__control--bigger");
const zoomOutButtonElement = document.querySelector(".scale__control--smaller");
const uploadEffectWrapper = document.querySelector(".img-upload__effect-level");

const renderUploadPreview = (file) => {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        previewImgElement.src = reader.result;
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
    zoonInButtonElement.addEventListener('click', onZoomInClick);
    zoomOutButtonElement.addEventListener('click', onZoomOutClick);
    effectListElement.addEventListener('click', onEffectsRadioChange);
    sliderElement.noUiSlider.on('update', onSliderUpdate);
}

const closeUploadModal = () => {
    uploadFormElement.classList.add('hidden');
    uploadEffectWrapper.classList.add('hidden');
    previewImgElement.className = 'effects__preview--none';

    uploadFormCloseElement.removeEventListener('click', closeUploadModal);
    zoonInButtonElement.removeEventListener('click', onZoomInClick);
    zoomOutButtonElement.removeEventListener('click', onZoomOutClick);
    effectListElement.removeEventListener('click', onEffectsRadioChange);
    sliderElement.noUiSlider.off('update');
}

export {openUploadModal};
