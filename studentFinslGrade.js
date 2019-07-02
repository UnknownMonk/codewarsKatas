function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  }
  if (exam > 75 && projects > 4) {
    return 90;
  }
  if (exam > 50 && projects > 1) {
    return 2;
  }

  return 0;
  e > 90 || p > 10 ? 100 : e > 75 && p > 4 ? 90 : e > 50 && p > 1 ? 75 : 0;
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(85, 5), 90);
