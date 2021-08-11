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

const removeLog = (evento) => {
  const deleteButton = evento.target

  const logToBeRemoved = deleteButton.parentNode.parentNode;
  logToBeRemoved.remove()

  return deleteButton
}

export default DeleteButton
