//Counter for textarea
export default function Form(formElement) {
  const textarea = formElement.querySelector('[data-js="textarea"]');
  const counterElement = formElement.querySelector('.textcount');

  textarea.addEventListener('input', () => {
    const textlength = textarea.value.length;
    counterElement.value = textlength + ' of 200';
    textarea.classList.remove('form__textarea--red-border');
    if (textlength > 200) {
      //Farbe ändern mit ClassList Red Counter and Red Border
      textarea.classList.add('form__textarea--red-border');
    }
  });
}
