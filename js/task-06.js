const input = document.getElementById('validation-input');

const handlerBlur = () => {
  const dataLength = Number(input.getAttribute('data-length'));
  const enteredValue = input.value.trim();
  const isValid = enteredValue.length === dataLength;

  input.classList.remove('valid', 'invalid');
  if (isValid) {
    input.classList.add('valid');
    console.log('Input is valid.');
  } else if (enteredValue.length === 0) {
    console.log('Input is empty.');
  } else {
    input.classList.add('invalid');
    console.log('Input is invalid.');
  }
};

input.addEventListener('blur', handlerBlur);