const click = document.querySelector(".big-picture [type=submit]");
const input = document.querySelector(".social__footer-text");

console.log(click);

input.addEventListener('input', function (evt) {
    if (evt.target.value) {
     click.disabled = false
    } else {
     click.disabled = true
    }
});


