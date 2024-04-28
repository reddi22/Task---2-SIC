// Define labels globally
const labels = {
    'telugu': {
        title: 'వడ్డి క్యాల్క్యులేటర్',
        fromDate: 'నుండి తేదీ:',
        toDate: 'కు తేదీ:',
        interestRate: 'వడ్డీ రేటు (%):',
        principalAmount: 'మొత్తం మొత్తం:',
        calculateButton: 'లాభాహారం',
        numDays: 'రోజుల సంఖ్య:',
        interestPerDay: 'రోజుల వడ్డి:',
        totalInterest: 'మొత్తం వడ్డి:',
        totalAmount: 'మొత్తం చెల్లింపు:'
    },
    'tamil': {
        title: 'வட்டி கணக்கிடுகின்றேன்',
        fromDate: 'முதல் தேதி:',
        toDate: 'வரை தேதி:',
        interestRate: 'வட்டி வீதம் (%):',
        principalAmount: 'மொத்த தொகை:',
        calculateButton: 'கணக்கிடு',
        numDays: 'நாட்களின் எண்:',
        interestPerDay: 'ஒரு நாளில் வட்டி:',
        totalInterest: 'மொத்த வட்டி:',
        totalAmount: 'மொத்த தொகை:'

    },
    'hindi': {
        title: 'ब्याज कैलकुलेटर',
        fromDate: 'से तारीख:',
        toDate: 'को तारीख तक:',
        interestRate: 'ब्याज दर (%):',
        principalAmount: 'कुल राशि:',
        calculateButton: 'गणना करें',
        numDays: 'दिनों की संख्या:',
        interestPerDay: 'प्रतिदिन ब्याज:',
        totalInterest: 'कुल ब्याज:',
        totalAmount: 'कुल राशि:'
    },
    'english': {
        title: 'Interest Calculator',
        fromDate: 'From Date:',
        toDate: 'To Date:',
        interestRate: 'Interest Rate (%):',
        principalAmount: 'Principal Amount:',
        calculateButton: 'Calculate',
        numDays: 'Number of Days:',
        interestPerDay: 'Interest Per Day:',
        totalInterest: 'Total Interest:',
        totalAmount: 'Total Amount:',
    }
};

function changeLanguage() {
    const language = document.getElementById('language').value;

    document.getElementById('title').innerText = labels[language].title;
    document.getElementById('from-date-label').innerText = labels[language].fromDate;
    document.getElementById('to-date-label').innerText = labels[language].toDate;
    document.getElementById('interest-rate-label').innerText = labels[language].interestRate;
    document.getElementById('principal-amount-label').innerText = labels[language].principalAmount;
    document.getElementById('calculate-button').innerText = labels[language].calculateButton;
    document.getElementById('num-days-label').innerText = labels[language].numDays;
    document.getElementById('interest-per-day-label').innerText = labels[language].interestPerDay;
    document.getElementById('total-interest-label').innerText = labels[language].totalInterest;
    document.getElementById('total-amount-label').innerText = labels[language].totalAmount;
}

function calculateInterest() {
    const language = document.getElementById('language').value;
    const fromDateValue = document.getElementById('from-date').value;
    const toDateValue = document.getElementById('to-date').value;
    const interestRate = parseFloat(document.getElementById('interest-rate').value);
    const principalAmount = parseFloat(document.getElementById('principal-amount').value);

    // Check if fromDate and toDate are valid dates
    const fromDate = new Date(fromDateValue);
    const toDate = new Date(toDateValue);

    // Check for invalid inputs


    if (!fromDateValue || !toDateValue || isNaN(interestRate) || interestRate <= 0 || isNaN(principalAmount) || principalAmount <= 0 || isNaN(fromDate.getTime()) || isNaN(toDate.getTime())) {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').innerText = '*Please give all the inputs or provide valid dates.';
        return;
    }

    const daysDiff = (toDate - fromDate) / (1000 * 60 * 60 * 24);
    const interestPerDay = (principalAmount * interestRate) / 36500;
    const totalInterest = interestPerDay * daysDiff;
    const totalAmount = parseInt(principalAmount) + parseInt(totalInterest);

    document.getElementById('num-days').value = daysDiff.toFixed(0);
    document.getElementById('interest-per-day').value = interestPerDay.toFixed(2);
    document.getElementById('total-interest').value = totalInterest.toFixed(2);
    document.getElementById('total-amount').value = totalAmount.toFixed(2);

    document.getElementById('result').style.color = 'black';

}