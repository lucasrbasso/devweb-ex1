const calcTotalTime = (currentTaskTime, operation) => {

  const currentTimeSpent = document.getElementById('timeValue').innerText;
  let totalTime;

  switch (operation) {
    case 'add':
      totalTime = Number(currentTimeSpent) + Number(currentTaskTime);
      break;
    case 'remove':
      totalTime = Number(currentTimeSpent) - Number(currentTaskTime);
      break;
    default:
      return;
  }

  document.getElementById('timeValue').innerText = totalTime.toString();
}

export default calcTotalTime;
