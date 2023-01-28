const uploadFormElement = document.querySelector(".img-upload__overlay");
const filename = document.querySelector(".img-upload__input");
const photo = document.querySelector(".img-upload__preview  img");

filename.addEventListener("change", function () {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
        photo.src = reader.result;
        document.querySelector(".effects__preview--none").style.backgroundImage = `url(${reader.result})`;
        document.querySelector(".effects__preview--chrome").style.backgroundImage = `url(${reader.result})`;
        document.querySelector(".effects__preview--sepia").style.backgroundImage = `url(${reader.result})`;
        document.querySelector(".effects__preview--marvin").style.backgroundImage = `url(${reader.result})`;
        document.querySelector(".effects__preview--phobos").style.backgroundImage = `url(${reader.result})`;
        document.querySelector(".effects__preview--heat").style.backgroundImage = `url(${reader.result})`;
        
    });
    
    reader.readAsDataURL(filename.files[0]);
    uploadFormElement.classList.remove('hidden');

    uploadFormElement.addEventListener('click', function () {
        uploadFormElement.classList.add('hidden');
    });
});
