//Проверка формы
const input_required = document.querySelectorAll('.input[required]');
const button_submit = document.querySelector('.button[type="submit"]');

button_submit.addEventListener('click', () => {
  input_required.forEach((input) => {
    if (input.value == '') {
      input.classList.add('input--invalid');
    }
    else {
      input.classList.remove('input--invalid');
    }
  })
});
