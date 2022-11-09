import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

initForm();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(formEl);

  formData.forEach((value, name) => console.log(value, name));
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formEl.reset();
}

function onFormInput(event) {
  const { name, value } = event.target;

  let feedbackInput = localStorage.getItem(LOCALSTORAGE_KEY);

  feedbackInput = feedbackInput ? JSON.parse(feedbackInput) : {};
  feedbackInput[name] = value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackInput));
}

function initForm() {
  let feedbackInput = localStorage.getItem(LOCALSTORAGE_KEY);

  if (feedbackInput) {
    feedbackInput = JSON.parse(feedbackInput);
    Object.entries(feedbackInput).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
