function sendData(url, body) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.addEventListener('load', function () {
        if (xhr.status === 201) {
            console.log(1);
        }
    });
    xhr.send(body);
}
export {sendData};