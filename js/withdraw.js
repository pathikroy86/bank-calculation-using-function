document.getElementById("withdraw-btn").addEventListener('click', function () {
    const initialWithdrawValue = grabDisplayElement("withdraw-area");
    const withdrawInputValue = grabInputElement("withdraw-Input");
    const totalBalanceNumber = grabDisplayElement("balance-area");
    if (withdrawInputValue > totalBalanceNumber) {
        alert("Insufficient Balance.")
    }
    else {
        const totalWithdraw = initialWithdrawValue + withdrawInputValue;
        document.getElementById("withdraw-area").innerText = totalWithdraw;

        const finalBalance = totalBalanceNumber - withdrawInputValue;
        document.getElementById("balance-area").innerText = finalBalance;
    }
})
