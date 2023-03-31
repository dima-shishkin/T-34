import {openPreviewModal} from "./preview-modal";

const picturesListElement = document.querySelector('.pictures');
const pictureTemplateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');

const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const pictureElement = pictureTemplateElement.cloneNode(true);

        pictureElement.querySelector('img').src = picture.url;
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
        pictureElement.dataset.id = picture.id;
        picturesListElement.append(pictureElement);

        pictureElement.addEventListener('click', function () {
            openPreviewModal(pictureElement, pictures);
        });
    }
};

export {renderPicturesList};