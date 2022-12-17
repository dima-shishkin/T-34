const picturesListElement = document.querySelector('.pictures');

const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const html = `
            <a href="#" class="picture">
                <img class="picture__img" src="${picture.url}" width="182" height="182" alt="Случайная фотография">
                <p class="picture__info">
                    <span class="picture__comments"></span>
                    <span class="picture__likes"></span>
                </p>
            </a>`;

        picturesListElement.insertAdjacentHTML('beforeend', html);
    }
};

export {renderPicturesList};