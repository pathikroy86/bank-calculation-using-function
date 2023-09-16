document.getElementById("deposit-btn").addEventListener('click', function () {
    const initialDepositValue = grabDisplayElement("deposit-area");
    const depositInputValue = grabInputElement("deposit-Input");
    const totalDeposit = initialDepositValue + depositInputValue;
    document.getElementById("deposit-area").innerText = totalDeposit;

    const totalBalanceNumber = grabDisplayElement("balance-area");
    const finalBalance = totalBalanceNumber + depositInputValue;
    document.getElementById("balance-area").innerText = finalBalance;
})

