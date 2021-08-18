function sortTable(n) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("logTable");
  switching = true;

  dir = "asc";

  const upArrow = document.createElement('img');
  upArrow.src = '../assets/bxs-up-arrow.png';
  upArrow.alt = 'up';

  const downArrow = document.createElement('img');
  downArrow.src = '../assets/bxs-down-arrow.png';
  downArrow.alt = 'down';

  const thElementRow = table.rows[0].getElementsByTagName("th")[n];
  const imgElement = table.rows[0].getElementsByTagName("img");

  if (imgElement.length == 1 && thElementRow.childNodes.length < 2) {
    imgElement[0].parentNode.removeChild(imgElement[0]);
  }

  if (thElementRow.childNodes.length < 2) {
    thElementRow.appendChild(upArrow)
  } else if (thElementRow.lastChild.alt === 'up') {
    thElementRow.removeChild(thElementRow.lastChild);
    thElementRow.appendChild(downArrow)
  } else if (thElementRow.lastChild.alt === 'down') {
    thElementRow.removeChild(thElementRow.lastChild);
    thElementRow.appendChild(upArrow)
  }

  while (switching) {

    switching = false;

    if (table.rows) {
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];

        if (n === 0) {
          if (dir == "asc") {
            if (Number(x.innerHTML) > Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
              shouldSwitch = true;
              break;
            }
          }
        } else {
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          }
        }
      }

      if (shouldSwitch) {

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;

        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
}
