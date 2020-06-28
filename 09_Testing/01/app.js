


const checkReverse = (number) => {

  const numberArray = number.toString().split('');

  const reverseArray = numberArray.reverse();

  return Number((reverseArray.join('')));

};
