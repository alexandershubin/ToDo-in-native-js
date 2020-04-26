class Task {
  constructor() {
    this.form = document.querySelector('.form');
    this.formInput = document.querySelector('.form__input');
    this.formButton = document.querySelector('.form__button');
    this.formList = document.querySelector('.form__list');
  
    this.itemsArray = localStorage.getItem('items') ?
      JSON.parse(localStorage.getItem('items')) : [];
    localStorage.setItem('items', JSON.stringify(this.itemsArray));
    this.data = JSON.parse(localStorage.getItem('items'));
  }
  
  createText(text) {
    const li = document.createElement('li');
    li.id = JSON.stringify(new Date());
    li.innerHTML = text;
    this.formList.appendChild(li);
  }
  
  onButtonSubmit() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.itemsArray.push(this.formInput.value);
      localStorage.setItem('items', JSON.stringify(this.itemsArray));
      this.createText(this.formInput.value);
      this.formInput.value = '';
    })
  }

  createItem() {
    this.data.forEach(item => {
      this.createText(item);
    })
  }
  
  onButtonClick() {
    this.formButton.addEventListener('click', (e) => {
      e.preventDefault()
      localStorage.clear()
      while (this.formList.firstChild) {
        this.formList.removeChild(this.formList.firstChild);
      }
    })
  }
}

let task = new Task();
task.onButtonSubmit();
task.createItem();
task.onButtonClick();