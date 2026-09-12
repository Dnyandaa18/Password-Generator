const btnEl = document.querySelector("#generateBtn");
const inputEl = document.getElementById("input");
const copyBtnEl = document.getElementById("copyBtn");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyBtnEl.addEventListener("click", () => {
    copyPassword();
});

function createPassword() {
    // Escaped the backslash inside character string: \\
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-={}|:'<>?,./~abcdefghijklmnopqrstuvwxyz0123456789";
    const passwordLength = 12;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum];
    }

    inputEl.value = password;
}
function copyPassword() {
    if (!inputEl.value) return;
    navigator.clipboard.writeText(inputEl.value);
    alertEl.classList.remove("active");
    setTimeout(() => {
        alertEl.classList.add("active");
    }, 2000);
}