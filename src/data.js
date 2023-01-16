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
const descriptions = [
    "Крутая фотка",
    "Прикольная фотка",
    "Какой кошмар",
    "Нормально",
    "Лучшая фотка",
    "Когда начался конец света",
];
const generatePicture = () => {
    return {
        id: getRandomInt(1, 1000),
        url: `./photos/${getRandomInt(1, 25)}.jpg`,
        description: descriptions[getRandomInt(0, descriptions.length - 1)],
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
