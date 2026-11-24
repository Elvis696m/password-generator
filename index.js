const myBtn = document.querySelector('#myBtn');
const message = document.querySelector('#message');

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

myBtn.addEventListener('click', () => {
    generatePassword();
});

function generatePassword() {
    let password = "";

    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters[randomIndex];
        password += randomCharacter;
    }
    message.textContent = password;
}
