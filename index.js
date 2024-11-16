const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generateBtn = document.getElementById("generate-btn")
let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")
let passLength = document.getElementById("password-length")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswords() {
    let randomPassword = ""
    let passwordLength = passLength.value
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword

}

generateBtn.addEventListener("click", function () {
    const generatePasswordOne = generatePasswords()
    const generatePasswordTwo = generatePasswords()

    firstPassword.value = generatePasswordOne
    secondPassword.value = generatePasswordTwo
})


