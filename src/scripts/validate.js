const validate = (time, date) => {

  time.classList.remove('error');
  date.classList.remove('error');

  let isValid = true

  if (!time.value || Number(time.value) <= 0) {
    time.classList.add('error');
    isValid = false
  }

  if (!date.value) {
    date.classList.add('error');
    isValid = false
  }

  return isValid
}

export default validate;
