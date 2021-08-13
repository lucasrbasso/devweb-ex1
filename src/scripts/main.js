import DeleteButton from '../components/deleteButton.js';

const createSportLog = (evento) => {

  evento.preventDefault()

  const logTableBody = document.querySelector('[data-table-body]');
  const time = document.querySelector('[data-form-time]');
  const sport = document.querySelector('[data-form-sport]');
  const date = document.querySelector('[data-form-date]');

  time.classList.remove('error');
  date.classList.remove('error');


  if(!time.value || Number(time.value) <= 0) {
    time.classList.add('error');
  }

  if(!date.value) {
    date.classList.add('error');
  }

  if (!time.value || !date.value || Number(time.value) <= 0) {
    return;
  }

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

  let currentTimeSpent = document.getElementById('timeValue').innerText;
  const totalTime = Number(currentTimeSpent) + Number(time.value);
  document.getElementById('timeValue').innerText = totalTime.toString();

  time.value="";
  date.value="";
}

const newLogSportButton = document.querySelector('[data-form-button]')
newLogSportButton.addEventListener('click', createSportLog)
