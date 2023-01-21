const descriptions = [
    "Крутая фотка",
    "Прикольная фотка",
    "Какой кошмар",
    "Нормально",
    "Лучшая фотка",
    "Когда начался конец света",
];

const messages = [
    "Круто",
    "Прикольно",
    "Лопну от смеха",
    "Коммент 1 - можно смеяться",
    "Коммент 2 - нельзя смеяться",
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateComment = () => {
    return {
        id: getRandomInt(1, 1000),
        message: messages[getRandomInt(0, messages.length - 1)],
        user: {
            avatar: `./img/avatar-${getRandomInt(1, 6)}.svg`,
            name: "Дима",
        }
    };
}

const generatePicture = () => {
    const comments = [];

    let i = 0;
    while (i < getRandomInt(0, 10)) {
        comments.push(generateComment());
        i++;
    }

    return {
        id: getRandomInt(1, 1000),
        url: `./photos/${getRandomInt(1, 25)}.jpg`,
        description: descriptions[getRandomInt(0, descriptions.length - 1)],
        likes: getRandomInt(1, 1000),
        comments: comments,
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