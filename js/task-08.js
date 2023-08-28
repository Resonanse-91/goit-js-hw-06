const loginForm = document.querySelector('.login-form');

const handleFormSubmit = (event) => {
  event.preventDefault(); // Зупиняємо перезавантаження сторінки

  const formData = new FormData(event.target);
  const formObject = {};

  formData.forEach((value, name) => {
    formObject[name] = value;
  });

  if (formObject.email && formObject.password) {
    console.log('Form data:', formObject);
    event.target.reset(); // Очищаємо значення полів форми
  } else {
    alert('All fields must be filled.');
  }
};

loginForm.addEventListener('submit', handleFormSubmit);
