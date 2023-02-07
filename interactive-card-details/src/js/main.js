// import "../scss/styles.scss";

const nameInput = document.getElementById("cardholder-name");
const nameOnCard = document.getElementById("name-on-card");

const cardNumberInput = document.getElementById("card-number");
const cardNumberOnCard = document.getElementById("card-number-on-card");

const expireMonthInput = document.getElementById("expire-month");
const expireMonthOnCard = document.getElementById("expire-month-on-card");

const expireYearInput = document.getElementById("expire-year");
const expireYearOnCard = document.getElementById("expire-year-on-card");

const cvcInput = document.getElementById("cvc");
const cvcOnCard = document.getElementById("cvc-on-card");

const messageContainers = document.querySelectorAll(".error-message");

const submitButton = document.getElementById("button");

const inputsAndCheckers = [
  [nameInput, nameChecker, nameOnCard],
  [cardNumberInput, cardNumberChecker, cardNumberOnCard],
  [expireMonthInput, expireMonthChecker, expireMonthOnCard],
  [expireYearInput, expireYearChecker, expireYearOnCard],
  [cvcInput, cvcChecker, cvcOnCard],
];

/*-----------------------------------------------*/

function nameChecker(nameInput) {
  return /^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$/.test(nameInput.value);
}

function cardNumberChecker(cardNumberInput) {
  return /^([0-9]{4} ){3}[0-9]{4}$/.test(cardNumberInput.value);
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
    } else {
      alertMessage(inputElement, "invalid");
    }
  }
  if (!status) {
    inputElement.classList.add("invalid-input");
  }
  return status;
}

function alertMessage(inputElement, status) {
  console.log(inputElement, status);
  const messageContainer = inputElement.parentElement.nextElementSibling;

  switch (status) {
    case "empty":
      if (messageContainer.textContent !== "Cannot be blank. ") {
        messageContainer.textContent += "Cannot be blank. ";
      }
      break;
    case "invalid":
      if (messageContainer.textContent !== msgTemplate) {
        messageContainer.textContent += inputElement.validationMessage;
      }
  }
}

function resetErrorMessage() {
  console.log("running");
  messageContainers.forEach(
    (messageContainer) => (messageContainer.textContent = "")
  );

  inputsAndCheckers.forEach(([input, checker, _]) =>
    input.classList.remove("invalid-input")
  );
}

/*-----------------------------------------------*/

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  resetErrorMessage();

  let detailsValidity = inputsAndCheckers.reduce(function (
    formStatus,
    [input, checker, _]
  ) {
    const inputStatus = statusChecker(input, checker);
    formStatus &&= inputStatus;
    return formStatus;
  },
  true);

  if (detailsValidity) {
    inputsAndCheckers.forEach(function ([input, _, onCardInfo]) {
      onCardInfo.textContent = input.value;
    });
  }
});
