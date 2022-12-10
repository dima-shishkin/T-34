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
        url: './photos/1.jpg',
        description: "фотографии природы",
        likse: 200,
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

        generatePicture(),
        generatePicture(),
        generatePicture(),
        generatePicture(),
        generatePicture(),
    ];
}

const pictures = generatePictures();
console.log(pictures);
