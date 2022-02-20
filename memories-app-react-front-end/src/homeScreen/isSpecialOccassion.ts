const now = new Date();
const date = now.getDate();
const month = now.getMonth();
let x = 0;

function isSpecialOccassion(x: number) {
  let specialOccassion = false;
  // conditional handles special occassions
  if (month === 1 && 12 <= date && date <= 29) {
    return !specialOccassion;
  } else if (month === 3 && 20 <= date && date <= 27) {
    x = 1;
    return !specialOccassion;
  } else if (month === 11 && 22 <= date && date <= 29) {
    x = 2;
    return !specialOccassion;
  } else {
    return specialOccassion;
  }
}

export { isSpecialOccassion, x };
