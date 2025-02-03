'use strict';

const storageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

console.log(formData);

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');
toNotReload();

formEl.addEventListener('input', handlInput);
formEl.addEventListener('submit', handlSabmit);

function handlInput(event) {
  const currentEvent = event.currentTarget.elements;

  if (currentEvent.email && currentEvent.email.value !== '') {
    formData.email = currentEvent.email.value.trim();
  }

  if (currentEvent.email && currentEvent.message.value !== '') {
    formData.message = currentEvent.message.value.trim();
  }

  console.log(formData);

  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function toNotReload() {
  if (localStorage.getItem(storageKey) !== null) {
    const savedMessage = localStorage.getItem(storageKey);

    const parsedMessage = JSON.parse(savedMessage);

    inputEl.value = parsedMessage.email;
    textareaEl.value = parsedMessage.message;

    formData.email = inputEl.value;
    formData.message = textareaEl.value;
  } else {
    return;
  }
}

function handlSabmit(event) {
  event.preventDefault();

  if (inputEl.value === '' || textareaEl.value === '') {
    alert('Fill please all fields');
  } else {
    console.log('befor:', formData);
    const currentEvent = event.currentTarget;
    currentEvent.reset();
    localStorage.removeItem(storageKey);
    formData.email = currentEvent.elements.email.value;
    formData.message = currentEvent.elements.message.value;
    console.log('after:', formData);
  }
}
