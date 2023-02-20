const effects = document.querySelector(".effects__list");
const uploadFormEffectsElement = document.querySelector(".img-upload__preview img");
const uploadEffect = document.querySelector(".effect-level__slider");
const uploadEffectWrapper = document.querySelector(".img-upload__effect-level");

effects.addEventListener('click', function (evt) {
    if (evt.target.matches(".effects__radio")) {
        console.log(evt.target.value);
        uploadFormEffectsElement.className = `effects__preview--${evt.target.value}`;
        if (evt.target.value === "none") {
            uploadEffectWrapper.classList.add('hidden');
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
    stop: 0.1, 
    connect: 'lower',
   //format: {
   //    to: function (value) {
   //        if (Numder.isInteger(value)) {
   //            return value.toFixed(0);
   //        }
   //        return value.toFixed(1);
   //    },
   //    from: function (value) {
   //        return parseFloat(value);
   //    }
   //}
});

const onSliderUpdate = (_, handle, unencoded) => {
    console.log(unencoded[handle]);
};
uploadEffect.noUiSlider.on("update", onSliderUpdate);