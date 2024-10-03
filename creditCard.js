// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:



let decision = null;
let sub = [];
let count = 0;

const validateCred = arr => {
   
    let decision = null;
    let sub = [];
    let count = 0;

    for(let i = arr.length - 1; i >= 0; i--){
        count++;
        if(i === arr.length - 1){
            let check = arr[i];
            sub.unshift(check);
        }else if((arr.length - 1 - i) % 2 !== 0){
            let val = arr[i] * 2
            if (val > 9){
                val -= 9;
            } 
            sub.unshift(val);
        }else {
            sub.unshift(arr[i]);
        }
    }
    sum = sub.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if (sum % 10 === 0){
        decision = true;
    }else{
        decision = false;
    }

    return decision;
};

const findInvalidCred = nestedArray => {
    let invalidCards = [];
    let nameArray = [];
    for (let card of nestedArray){
        if (!validateCred(card)){
            invalidCards.push(card);
            }
    }
    return invalidCards;
};



const idInvalidCardCompanies = (invalidArray) => {
    let mailedOut = [];
    const inval = findInvalidCred(invalidArray); // Declare the variable properly

    for (let nums of inval) {
        let company;
        
        // Ensure nums[0] is a number, handle invalid data
        const firstDigit = parseInt(nums[0], 10); 
        
        if (firstDigit === 3) {
            company = 'Amex (American Express)';
        } else if (firstDigit === 4) {
            company = 'Visa';
        } else if (firstDigit === 5) {
            company = 'Mastercard';
        } else if (firstDigit === 6) {
            company = 'Discover';
        } else {
            company = 'Company not found';
        }

        // Avoid adding duplicate companies
        if (!mailedOut.includes(company)) {
            mailedOut.push(company);
        }
    }

    return mailedOut;
}
const cardNumberString = "4539677908016808";

//connect to portfolio


document.getElementById('creditGo').addEventListener('click', function () {
    let selectedCard = document.getElementById('cards').value;

    let selectedCardArray;

    switch (selectedCard){
        case 'mystery1':
            selectedCardArray = mystery1;
            break;
        case 'mystery2':
            selectedCardArray = mystery2;
            break;
        case 'mystery3':
            selectedCardArray = mystery3;
            break;
        case 'mystery4':
            selectedCardArray = mystery4;
            break;
        case 'mystery5':
            selectedCardArray = mystery5;
            break;
        default:
            selectedCardArray=[];
    }
        
    let validateDemo = validateCred(selectedCardArray);

    document.getElementById('validateCred-output').innerText = validateDemo;
});


 
document.getElementById('creditGo1').addEventListener('click', function () {
    let findInvalidCredDemo = findInvalidCred(batch);
    document.getElementById('findInvalidCred-output').innerText = findInvalidCredDemo;
})

document.getElementById('creditGo2').addEventListener('click', function () {
    let idInvalidCardCompaniesDemo = idInvalidCardCompanies(batch);
    document.getElementById('idInvalidCardCompanies-output').innerText = idInvalidCardCompaniesDemo;
});

