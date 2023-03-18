const previewModalElement = document.querySelector('.big-picture');
const commentsListElement = document.querySelector(".social__comments");
const previewModalCloseElement = document.querySelector('.big-picture__cancel');

const commentTemplateElement = document.getElementById("comment")
    .content
    .querySelector(".social__comment");

const renderCommentsList = (comments) => {
    commentsListElement.innerHTML = "";

    for (const comment of comments) {
        const commentElement = commentTemplateElement.cloneNode(true);
        commentElement.querySelector(".social__text").textContent = comment.message;
        commentElement.querySelector(".social__picture").src = comment.user.avatar;
        
        commentsListElement.append(commentElement);
    }
};

const renderPicturePreview = (pictureElement, pictures) => {
    const id = Number(pictureElement.dataset.id);
    const picture = pictures.find((pic) => pic.id === id);

    document.querySelector('.big-picture__img img').src = picture.url;
    document.querySelector(".social__caption").textContent = picture.description;
    document.querySelector(".comments-count").textContent = picture.comments.length;
    
    renderCommentsList(picture.comments);
};

const openPreviewModal = (pictureElement, pictures) => {
    renderPicturePreview(pictureElement, pictures);
    previewModalElement.classList.remove('hidden');
    previewModalCloseElement.addEventListener('click', closePreviewModal);
};

const closePreviewModal = () => {
    previewModalElement.classList.add('hidden');
    previewModalCloseElement.removeEventListener('click', closePreviewModal);
};

document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
        closePreviewModal()
    };
});

export {openPreviewModal, closePreviewModal};