'use strict';

const storageKey = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
  toReload() {
    this.email = '';
    this.message = '';
  },
};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('input', handlInput);

formEl.addEventListener('submit', handlSabmit);
toNotReload();

function handlInput(event) {
  if (event.target === inputEl) {
    formData.email = event.target.value.trim();
  }

  if (event.target === textareaEl) {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function toNotReload() {
  const savedMessage = localStorage.getItem(storageKey);

  const parsedMessage = JSON.parse(savedMessage);

  inputEl.value = parsedMessage.email;
  textareaEl.value = parsedMessage.message;
}

function handlSabmit(event) {
  event.preventDefault();
  if (inputEl.value === '' || textareaEl.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem(storageKey);
  }
}
