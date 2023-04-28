const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#list');

form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value.trim()) {
    const task = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    const button = document.createElement('button');

    checkbox.type = 'checkbox';
    label.textContent = input.value.trim();
    button.textContent = 'Remover';

    task.appendChild(checkbox);
    task.appendChild(label);
    task.appendChild(button);
    list.appendChild(task);

    input.value = '';
    input.focus();

    button.addEventListener('click', () => {
      task.remove();
    });

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        label.style.textDecoration = 'line-through';
      } else {
        label.style.textDecoration = 'none';
      }
    });
  }
});
