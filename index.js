const myBtn = document.querySelector('#myBtn');
const message = document.querySelector('#message');
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

myBtn.addEventListener('click', () => {
    generatePassword();
});

function generatePassword() {
    let password = "";
    let name = 'KINGANGI HOTEL';
    let amount = 100;
    let balance = 3950.63;
    let transactionCode = password;
    let sms = `${transactionCode} Confirmed.
Ksh${amount}.00 has been sent to ${name}. at 13:42 PM on 24/11/2026.
New M-pesa balance is ${balance}. Transaction cost,Ksh0.00.Amount you can Transact
within the day is 499,760.00.
See all your balances now https://
saf.cx/kWQpy`;
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomCharacter = characters[randomIndex];
        password += randomCharacter;
    }
    message.textContent = password + sms
}
