import DeleteButton from '../components/deleteButton.js';
import validate from './validate.js';
import { increaseTotalTime } from '../scripts/updateTotalTime.js';

const createSportLog = (event) => {

  event.preventDefault();

  const logTableBody = document.getElementById('workout-table-body');

  const workout = {};

  document.querySelectorAll('#workout-log [name]')
    .forEach(input => workout[input.name] = input);

  const { time, sport, date } = workout;

  if(!validate(time,date)) {
    return;
  };

  const log = document.createElement('tr');
  const buttonTable = document.createElement('td');

  const content = `
    <td data-time="${time.value}">${time.value}</td>
    <td>${sport.value}</td>
    <td>${date.value}</td>
  `;

  buttonTable.appendChild(DeleteButton());

  log.innerHTML = content;

  log.appendChild(buttonTable);
  logTableBody.appendChild(log);

  increaseTotalTime(time.value);

  time.value = "";
  date.value = "";
}

const newLogSportButton = document.getElementById('submit-button');
newLogSportButton.addEventListener('click', createSportLog);
