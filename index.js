import Card from './components/Card.js';
import Form from './components/Form.js';
import Switch from './components/Switch.js';
const allCards = document.querySelectorAll('[data-js="card"]');

allCards.forEach(cardElement => {
  Card(cardElement);
});

const allFormElements = document.querySelectorAll('[data-js="form"]');

allFormElements.forEach(formElement => {
  Form(formElement);
});

Switch();
