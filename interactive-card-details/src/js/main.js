// import "../scss/styles.scss";

const nameInput = document.getElementById('cardholder-name');
const nameOnCard = document.getElementById('name-on-card');

const cardNumberInput = document.getElementById('card-number');
const cardNumberOnCard = document.getElementById('card-number-on-card');

const expireMonthInput = document.getElementById('expire-month');
const expireMonthOnCard = document.getElementById('expire-month-on-card');

const expireYearInput = document.getElementById('expire-year');
const expireYearOnCard = document.getElementById('expire-year-on-card');

const cvcInput = document.getElementById('cvc');
const cvcOnCard = document.getElementById('cvc-on-card');

const messageContainers = document.querySelectorAll('.error-message');

const submitButton = document.getElementById('confirm-button');
const continueButton = document.getElementById('continue-button');

const infoContainer = document.querySelector('.info-container');

const inputsAndOutputs = [
  [nameInput, nameOnCard],
  [cardNumberInput, cardNumberOnCard],
  [expireMonthInput, expireMonthOnCard],
  [expireYearInput, expireYearOnCard],
  [cvcInput, cvcOnCard],
];

/*-----------------------------------------------*/

function statusChecker(inputElement) {
  if (!inputElement.validity.valid) {
    alertMessage(inputElement);
  }
  return inputElement.validity.valid;
}

function alertMessage(inputElement) {
  const messageContainer = inputElement.parentElement.nextElementSibling;

  messageContainer.textContent = inputElement.validationMessage;
}

function resetErrorMessage() {
  messageContainers.forEach(
    (messageContainer) => (messageContainer.textContent = '')
  );

  inputsAndOutputs.forEach(([input, checker, _]) =>
    input.classList.remove('invalid-input')
  );
}

/*-----------------------------------------------*/

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  resetErrorMessage();

  let detailsValidity = inputsAndOutputs.reduce(function (
    formStatus,
    [input, _]
  ) {
    const inputStatus = statusChecker(input);
    formStatus &&= inputStatus;
    return formStatus;
  },
  true);

  if (detailsValidity) {
    inputsAndOutputs.forEach(function ([input, onCardInfo]) {
      onCardInfo.textContent = input.value;
    });

    Object.values(infoContainer.children).map(function (child) {
      child.classList.toggle('hide-content');
    });
  }
});

continueButton.addEventListener('click', function () {
  window.location.reload(true);
});
