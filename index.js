import Card from './scripts/Card.js';
import Form from './scripts/Form.js';
import Switch from './scripts/Switch.js';
const allCards = document.querySelectorAll('[data-js="card"]');

allCards.forEach(cardElement => {
  Card(cardElement);
});

const allFormElements = document.querySelectorAll('[data-js="form"]');

allFormElements.forEach(formElement => {
  Form(formElement);
});

Switch();
