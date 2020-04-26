const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
const formButton = document.querySelector('.form__button');
const formList = document.querySelector('.form__list');

let itemsArray = localStorage.getItem('items') ?
  JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
console.log(data)

const createLi = (text) => {
  const li = document.createElement('li');
  li.className = 'form__item';
  const input = document.createElement('input');
  input.type = 'checkbox';
  console.log(input.checked)
  li.innerHTML = text;
  formList.appendChild(li);
  li.appendChild(input);
 
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  itemsArray.push(formInput.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  createLi(formInput.value);
  formInput.value = '';
});

data.forEach(item => {
  createLi(item);
})

formButton.addEventListener('click', (e) => {
  e.preventDefault()
  localStorage.clear()
  while (formList.firstChild) {
    formList.removeChild(formList.firstChild);
  }
});
