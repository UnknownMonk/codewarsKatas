function setAlarm(employed, vacation) {
  if (employed && vacation) {
    return false;
  }

  if (employed) {
    return true;
  } else {
    return false;
  }
}
