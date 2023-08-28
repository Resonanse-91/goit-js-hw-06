const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

const handleInputChange = (event) => {
  const name = event.target.value;
  if (name) {
    nameOutput.textContent = name;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
  console.log(`Current name: ${nameOutput.textContent}`);
};

nameInput.addEventListener('input', handleInputChange);