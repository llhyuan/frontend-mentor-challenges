// import "../scss/styles.scss";

const nameInput = document.getElementById("cardholder-name");
const nameOnCard = document.getElementById("name-on-card");

const cardNumberInput = document.getElementById("card-number");
const cardNumberOnCard = document.getElementById("name-on-card");

const expireMonthInput = document.getElementById("expire-month");
const expireMonthOnCard = document.getElementById("expire-month-on-card");

const expireYearInput = document.getElementById("expire-year");
const expireYearOnCard = document.getElementById("expire-year-on-card");

const cvcInput = document.getElementById("cvc");
const cvcOnCard = document.getElementById("cvc-on-card");

const submitButton = document.getElementById("button");

/*-----------------------------------------------*/

function nameChecker(nameInput) {
  return /^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/.test(nameInput.value);
}

function cardNumberChecker(cardNumberInput) {
  return /^[0-9]{15}[0-9]$/.test(cardNumberInput.value);
}

function expireMonthChecker(expireMonthInput) {
  return /^0[1-9]$|^1[12]$/.test(expireMonthInput.value);
}

function expireYearChecker(expireYearInput) {
  return /^[0-9][0-9]$/.test(expireYearInput.value);
}

function cvcChecker(cvcInput) {
  return /^[0-9]{2}[0-9]$/.test(cvcInput.value);
}

function statusChecker(inputElement, checker) {
  let status = false;
  if (inputElement.value === "") {
    alertMessage(inputElement, "empty");
  } else {
    if (checker(inputElement)) {
      status = true;
      alertMessage(inputElement, "valid");
    } else {
      alertMessage(inputElement, "valid");
    }
  }
  return status;
}

function alertMessage(inputElement, status) {}

function resetErrorMessage() {}

/*-----------------------------------------------*/
const inputsAndCheckers = [
  [nameInput, nameChecker],
  [cardNumberInput, cardNumberChecker],
  [expireMonthInput, expireMonthChecker],
  [expireYearInput, expireYearChecker],
  [cvcInput, cvcChecker],
];
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let detailsValidility;
});
