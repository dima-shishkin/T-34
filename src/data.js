function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateComment = () => {
    return {
        id: 2,
        messade: "Круто",
        user: {
            avatar: './img/avatars/1.svg',
            name: "Дима",
        }
    };
}

const generatePicture = () => {
    return {
        id: 1,
        url: `./photos/${getRandomInt(1, 25)}.jpg`,
        description: "фотографии природы",
        likes: getRandomInt(1, 1000),
        comments: [
            generateComment(),
            generateComment(),
            generateComment(),
        ],
    };
};

const generatePictures = () => {
    return [
        generatePicture(),
        generatePicture(),
        generatePicture(),
        generatePicture(),
        generatePicture(),
    ];
}

export {generatePictures};
