const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const enteredValue = input.value;
    const listElement = document.createElement('li');
    listElement.textContent = enteredValue;
    list.appendChild(listElement);
    input.value = '';
})