function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}

Test.assertEquals(
  checkCoupon("123", "123", "September 5, 2014", "October 1, 2014"),
  true
);
Test.assertEquals(
  checkCoupon("123a", "123", "September 5, 2014", "October 1, 2014"),
  false
);
