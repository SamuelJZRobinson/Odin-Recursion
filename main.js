function fibsIte(digitCount){
  let fibList = [0,1];
  for (let i = 2; i < digitCount; i++) {
    fibList.push(fibList[i-1] + fibList[i-2]);
  }
  return fibList;
}

// console.log(fibsIte(8));

function fibsRec(digitCount){
  let fibList = [0,1];
  if (digitCount <= 1) return fibList;
  fibList.push(fibList[digitCount-1] + fibList[digitCount-2]);
}

// console.log(fibsIte(8));