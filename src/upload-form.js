const uploadFormElement = document.querySelector(".img-upload__overlay");
const filename = document.querySelector(".img-upload__input");
const photo = document.querySelector(".img-upload__preview  img");
const effects = document.querySelectorAll(".effects__preview");

filename.addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        photo.src = reader.result;
        // let i = 0;
        // while (i < effects.length) {
        //     effects[i].style.backgroundImage = `url(${reader.result})`;
        //     i++;
        // }
        
        for (const effect of effects) {
            effect.style.backgroundImage = `url(${reader.result})`;
        }
    });
    
    reader.readAsDataURL(filename.files[0]);
    uploadFormElement.classList.remove('hidden');

    uploadFormElement.addEventListener('click', function () {
        uploadFormElement.classList.add('hidden');
    });
});
