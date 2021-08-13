const validate = (time, date) => {

  time.classList.remove('error');
  date.classList.remove('error');

  if (!time.value || Number(time.value) <= 0) {
    time.classList.add('error');
  }

  if (!date.value) {
    date.classList.add('error');
  }

  if (!time.value || !date.value || Number(time.value) <= 0) {
    return false;
  }

  return true;
}

export default validate;
