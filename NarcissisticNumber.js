function narcissistic(value) {
  // Code me to return true or false

  inputArraye = value.toString().split("");
  len = inputArraye.length;
  let inputValueInt = inputArraye.map(Number);
  total = 0;

  for(iterator = 0; iterator < inputValueInt.length; iterator++){
    powerItems = (inputValueInt[iterator]) ** len;
    total += powerItems
  }

  if (total == value) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }

}


narcissistic(370)