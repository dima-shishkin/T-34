const previewModalElement = document.querySelector('.big-picture');
const previewModalCloseElement = document.querySelector('.big-picture__cancel');
const picturesListElement = document.querySelector('.pictures');
const commentsListElement = document.querySelector(".social__comments");

const commentTemplateElement = document.getElementById("comment")
    .content
    .querySelector(".social__comment");

const pictureTemplateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');

const renderCommentsList = (comments) => {
    commentsListElement.innerHTML = "";

    for (const comment of comments) {
        const commentElement = commentTemplateElement.cloneNode(true);
        commentElement.querySelector(".social__text").textContent = comment.message;
        commentElement.querySelector(".social__picture").src = comment.user.avatar;
        
        commentsListElement.append(commentElement);
    }
}

const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const pictureElement = pictureTemplateElement.cloneNode(true);

        pictureElement.querySelector('img').src = picture.url;
        pictureElement.querySelector('.picture__likes').textContent = picture.likes;
        pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
        pictureElement.dataset.id = picture.id;

        picturesListElement.append(pictureElement);

        pictureElement.addEventListener('click', function () {
            const id = Number(pictureElement.dataset.id);
            const picture = pictures.find((pic) => pic.id === id);

            document.querySelector('.big-picture__img img').src = picture.url;
            document.querySelector(".social__caption").textContent = picture.description;
            document.querySelector(".comments-count").textContent = picture.comments.length;

            renderCommentsList(picture.comments);

            previewModalElement.classList.remove('hidden');
        });
    }

    previewModalCloseElement.addEventListener('click', function () {
        previewModalElement.classList.add('hidden');
    });
};

export {renderPicturesList};