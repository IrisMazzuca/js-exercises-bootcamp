// const isOdd = (number) => {
//   if (number % 2 == 1) {
//     return true;
//   } else {
//     return false;
//   }
// };

const isOdd = (number) => {
  return number % 2 == 1;
};

const inRange =  (x, min,  max) => {
  return (x <= max && x>= min);
};

const getPercentage = (num, div) => {
  return (num / div) / 100;
};



