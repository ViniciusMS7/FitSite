// JS para animação de labels flutuantes

document.querySelectorAll('.form-group input').forEach(input => {
  input.addEventListener('focus', () => {
    input.parentNode.classList.add('focus');
  });
  input.addEventListener('blur', () => {
    if (input.value === '') {
      input.parentNode.classList.remove('focus');
    }
  });
});
