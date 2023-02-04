const preview = document.querySelector(".img-upload__preview img");
const control = document.querySelector(".scale__control--value");
const smaller = document.querySelector(".scale__control--smaller");
const bigger = document.querySelector(".scale__control--bigger");

let scale = 100;

smaller.addEventListener('click', function (evt) {
    evt.stopPropagation();
    if (scale > 25) {
        scale = scale - 25;
        preview.style.transform  = `scale(${scale / 100})`;
        control.value = scale + '%';
    }
});

bigger.addEventListener('click', function () {
});
