document.getElementById("login-btn").addEventListener('click', function () {
    const emailInputField = document.getElementById("mail-input-field");
    const emailInputValue = emailInputField.value;

    const passInputField = document.getElementById("pass-input-field");
    const passInputValue = passInputField.value;

    if (emailInputValue === "pathik.roy86@gmail.com" && passInputValue === "P@ar51291") {
        window.location.href = 'calculation.html';
    }
    else {
        alert("Wrong email/password. Please enter the correct one.");
    }
})