const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');
let noteContainer = document.querySelector('.notes-container');

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  img.src = 'images/delete.png';
  noteContainer.appendChild(inputBox).appendChild(img);
  saveData();
});

noteContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem('note-app-data', noteContainer.innerHTML);
}

function showData() {
  noteContainer.innerHTML = localStorage.getItem('note-app-data');
}

showData();
