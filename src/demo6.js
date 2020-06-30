var answer

const getMaxNumber = ( numbersArray ) => {
  answer = numbersArray.reduce(( initialValue, resultValue ) => {
    if (resultValue > initialValue) {
      return resultValue;
    } else {
      return initialValue;
    }
  });
  return answer;
}

const getMinNumber = ( numbersArray ) => {
  answer = numbersArray.reduce(( initialValue, resultValue ) => {
    if (initialValue > resultValue) {
      return resultValue;
    } else {
      return initialValue;
    }
  }, numbersArray[0])
  return answer;
}

const getAverage = ( numbersArray ) => {
  answer = numbersArray.reduce(( initialValue, resultValue ) => {
    return (initialValue + resultValue);
  }, 0)
  return answer / numbersArray.length;
}

module.exports = { getMaxNumber, getMinNumber, getAverage }