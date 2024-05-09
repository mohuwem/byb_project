function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Loan Calculation Result:</h2>
        <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
        <p>Total Payment: $${totalPayment.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
}

function calculateSavings() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const annualRate = parseFloat(document.getElementById('annualRate').value);
    const timePeriod = parseFloat(document.getElementById('timePeriod').value);

    const monthlyRate = annualRate / 100 / 12;
    const numberOfMonths = timePeriod * 12;

    const futureValue = initialAmount * Math.pow(1 + monthlyRate, numberOfMonths);
    const totalInterest = futureValue - initialAmount;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Savings Calculation Result:</h2>
        <p>Future Value: $${futureValue.toFixed(2)}</p>
        <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    `;
}
