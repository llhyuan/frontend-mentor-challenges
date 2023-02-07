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

/*----------------------------------------------------*/

const shakeAnimation = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(-5px)' },
  { transform: 'translateX(0)' },
  { transform: 'translateX(5px)' },
  { transform: 'translateX(0)' },
];

const animationSetting = {
  duration: 300,
  iteration: 2,
  easing: 'linear',
};

/*-----------------------------------------------------*/

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

function resetErrorMessage(errorMessage) {
  errorMessage.textContent = '';
}

function formValidityChecker() {
  return inputsAndOutputs.reduce(function (formStatus, [input, _]) {
    const inputStatus = statusChecker(input);
    formStatus &&= inputStatus;
    return formStatus;
  }, true);
}

/*-----------------------------------------------*/

inputsAndOutputs.forEach(function ([input]) {
  input.addEventListener('focusout', function (e) {
    const errorMessage = e.target.parentElement.nextElementSibling;
    resetErrorMessage(errorMessage);
    statusChecker(e.target);

    if (formValidityChecker()) {
      submitButton.disabled = false;
    }
  });
});

submitButton.addEventListener('click', function (e) {
  e.preventDefault();

  inputsAndOutputs.forEach(function ([input, onCardInfo]) {
    onCardInfo.textContent = input.value;
  });

  Object.values(infoContainer.children).map(function (child) {
    child.classList.toggle('hide-content');
  });

  const card = document.querySelector('.card-container');
  card.animate(shakeAnimation, animationSetting);
});

continueButton.addEventListener('click', function () {
  window.location.reload(true);
});
