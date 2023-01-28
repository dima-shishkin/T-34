const uploadFormElement = document.querySelector(".img-upload__overlay");
const filename = document.querySelector(".img-upload__input");
const photo = document.querySelector(".img-upload__preview  img");

filename.addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        photo.src = reader.result;
        document.querySelector(".effects__preview--none").style.backgroundImage = `url(${reader.result})`;
    });
    
    reader.readAsDataURL(filename.files[0]);
    uploadFormElement.classList.remove('hidden');
});