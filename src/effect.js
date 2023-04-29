const previewImgElement = document.querySelector(".img-upload__preview img");
const effectSliderElement = document.querySelector(".effect-level__slider");
const sliderWrapperElement = document.querySelector(".img-upload__effect-level");

noUiSlider.create(effectSliderElement, {
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

const EFFECTS = [
    {
        name: 'chrome',
        filter: 'grayscale',
        unit: null,
    },
    {
        name: 'sepia',
        filter: 'sepia',
        unit: null,
    },    
    {
        name: 'marvin',
        filter: 'invert',
        unit: '%',
    },    
    {
        name: 'phobos',
        filter: 'blur',
        unit: 'px',
    },    
    {
        name: 'heat',
        filter: 'brightness',
        unit: null,
    },    
];

const onSliderUpdate = (_, handle, unencoded) => {
    const effect = document.querySelector('.effects__radio:checked').id.split('-')[1];

    let i = 0;
    while (i < EFFECTS.length) {
        const effectItem = (EFFECTS[i]);
        if (effect === effectItem.name) {
            previewImgElement.style.filter = `${effectItem.filter}(${unencoded[handle]}${effectItem.unit ?? ''})`;
        }
        i++;
    }
};

const onEffectsRadioChange = (evt) => {
    if (evt.target.matches(".effects__radio")) {
        previewImgElement.className = `effects__preview--${evt.target.value}`;

       if (evt.target.value === "none") {
        previewImgElement.style.filter = 'unset';
            sliderWrapperElement.classList.add('hidden');

       } else if (evt.target.value === "chrome") {
            effectSliderElement.noUiSlider.updateOptions({
               range: {min: 0, max: 1},
               step: 0.1
           });
           effectSliderElement.noUiSlider.set(1);
           sliderWrapperElement.classList.remove('hidden');

       } else if (evt.target.value === "sepia") {
            effectSliderElement.noUiSlider.updateOptions({
               range: {min: 0, max: 1},
               step: 0.1
           });
           effectSliderElement.noUiSlider.set(1);
           sliderWrapperElement.classList.remove('hidden');

       } else if (evt.target.value === "marvin") {
            effectSliderElement.noUiSlider.updateOptions({
               range: {min: 0, max: 100},
               step: 1
           });
           effectSliderElement.noUiSlider.set(100);
           sliderWrapperElement.classList.remove('hidden');

       } else if (evt.target.value === "phobos") {
            effectSliderElement.noUiSlider.updateOptions({
               range: {min: 0, max: 3},
               step: 0.1
           });
           effectSliderElement.noUiSlider.set(3);
           sliderWrapperElement.classList.remove('hidden');

       } else if (evt.target.value === "heat") {
            effectSliderElement.noUiSlider.updateOptions({
               range: {min: 1, max: 3},
               step: 0.1
           });
           effectSliderElement.noUiSlider.set(3);
           sliderWrapperElement.classList.remove('hidden');

       } else {
        sliderWrapperElement.classList.remove('hidden');
       }
   }
};

export {onSliderUpdate, onEffectsRadioChange};
