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
        range: {min: 0, max: 1},
        step: 0.1
    },
    {
        name: 'sepia',
        filter: 'sepia',
        unit: null,
        range: {min: 0, max: 1},
        step: 0.1
    },    
    {
        name: 'marvin',
        filter: 'invert',
        unit: '%',
        range: {min: 0, max: 100},
        step: 1
    },    
    {
        name: 'phobos',
        filter: 'blur',
        unit: 'px',
        range: {min: 0, max: 3},
        step: 0.1
    },    
    {
        name: 'heat',
        filter: 'brightness',
        unit: null,
        range: {min: 1, max: 3},
        step: 0.1
    },    
];

const onSliderUpdate = (_, handle, unencoded) => {
    const effect = document.querySelector('.effects__radio:checked').id.split('-')[1];

    let i = 0;
    while (i < EFFECTS.length) {
        const effectItem = EFFECTS[i];
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
            return;
        }
        
        for (const effectItem of EFFECTS) {
            if (evt.target.value === effectItem.name) {
                effectSliderElement.noUiSlider.updateOptions({
                    range: {min: effectItem.range.min, max: effectItem.range.max},
                    step: effectItem.step
                });
                effectSliderElement.noUiSlider.set(effectItem.range.max);
                sliderWrapperElement.classList.remove('hidden');
            }
        }
    }
};

export {onSliderUpdate, onEffectsRadioChange};
