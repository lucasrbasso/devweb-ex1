import DeleteButton from '../components/deleteButton.js';

const createSportLog = (evento) => {

  evento.preventDefault()

  const logTableBody = document.querySelector('[data-table-body]');
  const time = document.querySelector('[data-form-time]');
  const sport = document.querySelector('[data-form-sport]');
  const date = document.querySelector('[data-form-date]');

  // const dateJs = new Date(date.value + 'T00:00:00');
  // const dateFormatted = dateJs.getDate().toString().padStart(2, '0') + "/" +
  //   (dateJs.getMonth()+1).toString().padStart(2, '0') + "/" +
  //   dateJs.getFullYear();

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
