import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form');
form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(event) {
  event.preventDefault();
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.removeItem(STORAGE_KEY);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  event.currentTarget.reset();
}

function onFormInput(event) {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    form.email.value = savedMessage.email;
    form.message.value = savedMessage.message;
  }
}
