function currentDate() {
  const checkOneDigit = (number) => {
    if (number > 9) {
      return number;
    }
    return "0" + number;
  };

  let date = new Date();
  let day = checkOneDigit(date.getDate());
  let month = checkOneDigit(date.getMonth() + 1);
  let year = date.getFullYear();
  let hour = checkOneDigit(date.getHours());
  let minute = checkOneDigit(date.getMinutes());
  console.log(`${day}-${month}-${year}-${hour}-${minute}`);
}

currentDate();
