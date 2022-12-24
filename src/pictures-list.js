const previewModalElement = document.querySelector('.big-picture');
const previewModalCloseElement = document.querySelector('.big-picture__cancel');
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

        picturesListElement.append(pictureElement);

        pictureElement.addEventListener('click', function () {
            previewModalElement.classList.remove('hidden');
        });
    }

    previewModalCloseElement.addEventListener('click', function () {
        previewModalElement.classList.add('hidden');
    });
};

export {renderPicturesList};
