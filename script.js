function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    
    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid bill amount.";
        return;
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;

    document.getElementById('result').innerText = 
        `Tip Amount: $${tipAmount.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
}