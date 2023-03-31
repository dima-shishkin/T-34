const previewImgElement = document.querySelector(".img-upload__preview img");
const scaleValueElement = document.querySelector(".scale__control--value");

let scale = 100;

const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;

const onZoomOutClick = (evt) => {
    evt.stopPropagation();
    if (scale > MIN_SCALE_VALUE) {
        scale = scale - MIN_SCALE_VALUE;
        previewImgElement.style.transform  = `scale(${scale / 100})`;
        scaleValueElement.value = scale + '%';
    }
}

const onZoomInClick = (evt) => {
    evt.stopPropagation();
    if (scale < MAX_SCALE_VALUE) {
        scale = scale + MIN_SCALE_VALUE;
        previewImgElement.style.transform  = `scale(${scale / 100})`;
        scaleValueElement.value = scale + '%';
    }
}

export {onZoomInClick, onZoomOutClick};
