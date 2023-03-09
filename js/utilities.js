function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  if (inputField.value==='') {
    alert("Input field cann't be empty");
    return 0;
  } else {
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
  }
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
