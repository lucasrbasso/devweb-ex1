import { decreaseTotalTime } from '../scripts/updateTotalTime.js';

const DeleteButton = () => {
  const deleteButton = document.createElement('button');

  const img = document.createElement('img');
  img.src = "../assets/bx-trash.png";
  img.alt = "delete";

  const text = document.createTextNode("Remover");

  deleteButton.appendChild(img)
  deleteButton.appendChild(text)

  deleteButton.addEventListener('click', removeLog);

  return deleteButton
}

const removeLog = (event) => {
  const deleteButton = event.target

  const logToBeRemoved = deleteButton.parentNode.parentNode;

  const currentTaskTime = logToBeRemoved.querySelector('[data-time]').dataset.time;
  decreaseTotalTime(currentTaskTime);

  logToBeRemoved.remove();

  return deleteButton;
}

export default DeleteButton
