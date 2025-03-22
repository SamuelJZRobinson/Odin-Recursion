function fibsIte(digitCount){
  let fibList = [0,1];
  for (let i = 2; i < digitCount; i++) {
    fibList.push(fibList[i-1] + fibList[i-2]);
  }
  return fibList;
}

console.log(fibsIte(8));