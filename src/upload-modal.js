import {onZoomInClick, onZoomOutClick} from "./zoom";
import {renderUploadPreview} from "./upload-preview"
import {onSliderUpdate, onEffectsRadioChange} from "./effect";

const effectListElement = document.querySelector(".effects__list");
const sliderElement = document.querySelector(".effect-level__slider");
const uploadFormElement = document.querySelector(".img-upload__overlay");
const uploadModalOpenElement = document.querySelector(".img-upload__input");
const uploadFormCloseElement = document.querySelector(".img-upload__cancel");
const previewImgElement = document.querySelector(".img-upload__preview  img");
const zoonInButtonElement = document.querySelector(".scale__control--bigger");
const zoomOutButtonElement = document.querySelector(".scale__control--smaller");
const uploadEffectWrapper = document.querySelector(".img-upload__effect-level");

const openUploadModal = (file) => {
    renderUploadPreview(file);
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

if (uploadModalOpenElement) {
    uploadModalOpenElement.addEventListener("change", () => {
        openUploadModal(uploadModalOpenElement.files[0]);
    });
}

export {closeUploadModal};
