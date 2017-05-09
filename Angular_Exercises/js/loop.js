const pressed = [];
const secretCode = 'magic';
window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        var forever = setInterval(myFunc, 100);
    }
});

function myFunc() {
	cornify_add();
}