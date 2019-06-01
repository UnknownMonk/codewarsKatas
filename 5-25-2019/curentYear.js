function century(year) {
  const century = Math.floor(year / 100);
  const decade = year % 100;

  if (decade >= 1) {
    return century + 1;
  }

  return century;
}

century(1900);
