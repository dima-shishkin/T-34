const effects = document.querySelector(".effects__list");
const uploadFormEffectsElement = document.querySelector(".img-upload__preview img");
const uploadEffect = document.querySelector(".effect-level__slider");
const uploadEffectWrapper = document.querySelector(".img-upload__effect-level");

effects.addEventListener('click', function (evt) {
    if (evt.target.matches(".effects__radio")) {
        uploadFormEffectsElement.className = `effects__preview--${evt.target.value}`;

        if (evt.target.value === "none") {
            uploadFormEffectsElement.style.filter = 'unset';
            uploadEffectWrapper.classList.add('hidden');

        } else if (evt.target.value === "chrome") {
            uploadEffect.noUiSlider.updateOptions({
                range: {min: 0, max: 1},
                step: 0.1
            });
            uploadEffect.noUiSlider.set(1);
            uploadEffectWrapper.classList.remove('hidden');

        } else if (evt.target.value === "sepia") {
            uploadEffect.noUiSlider.updateOptions({
                range: {min: 0, max: 1},
                step: 0.1
            });
            uploadEffect.noUiSlider.set(1);
            uploadEffectWrapper.classList.remove('hidden');

        } else if (evt.target.value === "marvin") {
            uploadEffect.noUiSlider.updateOptions({
                range: {min: 0, max: 100},
                step: 1
            });
            uploadEffect.noUiSlider.set(100);
            uploadEffectWrapper.classList.remove('hidden');

        } else if (evt.target.value === "phobos") {
            uploadEffect.noUiSlider.updateOptions({
                range: {min: 0, max: 3},
                step: 0.1
            });
            uploadEffect.noUiSlider.set(3);
            uploadEffectWrapper.classList.remove('hidden');

        } else if (evt.target.value === "heat") {
            uploadEffect.noUiSlider.updateOptions({
                range: {min: 1, max: 3},
                step: 0.1
            });
            uploadEffect.noUiSlider.set(3);
            uploadEffectWrapper.classList.remove('hidden');

        } else {
            uploadEffectWrapper.classList.remove('hidden');
        }
    }
});

noUiSlider.create(uploadEffect, {
    range: {
        "min": 0,
        "max": 1
    },
    start: 1,
    step: 0.1, 
    connect: 'lower',
    format: {
        to: function (value) {
            if (Number.isInteger(value)) {
                return value.toFixed(0);
            }
            return value.toFixed(1);
        },
        from: function (value) {
            return parseFloat(value);
        }
    }
});

const onSliderUpdate = (_, handle, unencoded) => {
    const effect = document.querySelector('.effects__radio:checked').id.split('-')[1];

    if (effect === "chrome") {
        uploadFormEffectsElement.style.filter = `grayscale(${unencoded[handle]})`;
    } else if (effect === "sepia") {
        uploadFormEffectsElement.style.filter = `sepia(${unencoded[handle]})`;
    }else if (effect === "marvin") {
        uploadFormEffectsElement.style.filter = `invert(${unencoded[handle]}%)`;
    }else if (effect === "phobos") {
        uploadFormEffectsElement.style.filter = `blur(${unencoded[handle]}px)`;
    }else if (effect === "heat") {
        uploadFormEffectsElement.style.filter = `brightness(${unencoded[handle]})`;
    }
};
uploadEffect.noUiSlider.on("update", onSliderUpdate);