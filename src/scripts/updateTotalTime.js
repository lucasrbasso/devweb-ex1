const updateTotalTime = (currentTaskTime) => {

  const currentTimeSpent = document.getElementById('timeValue').innerText;
  const totalTime = Number(currentTimeSpent) + currentTaskTime;

  document.getElementById('timeValue').innerText = totalTime.toString();
}

export const decreaseTotalTime = currentTaskTime => updateTotalTime(-Number(currentTaskTime));
export const increaseTotalTime = currentTaskTime => updateTotalTime(Number(currentTaskTime));
