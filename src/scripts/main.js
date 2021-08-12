import DeleteButton from '../components/deleteButton.js';

const createSportLog = (evento) => {

  evento.preventDefault()

  const logTableBody = document.querySelector('[data-table-body]');
  const time = document.querySelector('[data-form-time]');
  const sport = document.querySelector('[data-form-sport]');
  const date = document.querySelector('[data-form-date]');

  const log = document.createElement('tr');
  const buttonTable = document.createElement('td');

  const content = `
    <td>${time.value}</td>
    <td>${sport.value}</td>
    <td>${date.value}</td>
  `

  buttonTable.appendChild(DeleteButton());

  log.innerHTML = content;
  log.appendChild(buttonTable);

  logTableBody.appendChild(log);


  time.value="";
  date.value="";
}

const newLogSportButton = document.querySelector('[data-form-button]')
newLogSportButton.addEventListener('click', createSportLog)
