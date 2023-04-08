const previewImgElement = document.querySelector(".img-upload__preview  img");
const effects = document.querySelectorAll(".effects__preview");

const renderUploadPreview = (file) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        previewImgElement.src = reader.result;
        effects.forEach((effect) => {
            effect.style.backgroundImage = `url(${reader.result})`;
        });
    });
    
    reader.readAsDataURL(file);
}

export {renderUploadPreview};