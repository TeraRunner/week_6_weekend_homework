document.addEventListener('DOMContentLoaded', () => {
  const newDataForm = document.querySelector('#new-data-form');
  newDataForm.addEventListener('submit', handleNewDataFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewDataFormSubmit = function (event) {
  event.preventDefault();

  const dataListItem = createDataListItem(event.target);
  const dataList = document.querySelector('#data-list');
  dataList.appendChild(dataListItem);

  event.target.reset();
}

const createDataListItem = function (form) {
  const dataListItem = document.createElement('li');
  dataListItem.classList.add('data-list-item');

  const f_name = document.createElement('p');
  f_name.textContent = form.f_name.value;
  dataListItem.appendChild(f_name);

  const l_name = document.createElement('p');
  l_name.textContent = form.l_name.value;
  dataListItem.appendChild(l_name);

  const email = document.createElement('p');
  email.textContent = form.email.value;
  dataListItem.appendChild(email);

  return dataListItem;
}

const handleDeleteAllClick = function (event) {
  const dataList = document.querySelector('#data-list');
  dataList.innerHTML = '';
}
