function sendData() {
    const xhr = new HMLHttpRequest();
    xhr.open('POST', 'http://localhost:80/pictures');
    xhr.addEventListener('load', function () {
        if (xhr.status === 201) {
            console.log(1);
        }
    });
    xhr.send();
}
