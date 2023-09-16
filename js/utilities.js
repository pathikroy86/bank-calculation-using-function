//Background Image of the full body
const backImage = document.getElementsByTagName("body");
backImage[0].style.backgroundImage = 'url("images/smoke.avif")';
backImage[0].style.backgroundSize = 'cover';
backImage[0].style.backgroundRepeat = 'no-repeat';

//Grab each element by this default function

function grabDisplayElement(displayId) {
    const inputArea = document.getElementById(displayId);
    const inputAreaValue = inputArea.innerText;
    const inputAreaValueNumber = parseFloat(inputAreaValue);
    return inputAreaValueNumber;
}

function grabInputElement(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    const inputFieldValueNumber = parseFloat(inputFieldValue);
    return inputFieldValueNumber;
}
