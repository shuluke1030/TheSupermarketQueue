function queueTime(customers, n) {
  let sum = 0;
    if (customers === []){
    return 0;
  }else if(n === 1){
    for(let i = 0; i <customers.length; i++){
        sum += customers[i];
    }
    return sum;
  }
  let tills = new Array(n).fill(0);
  for(let i = 0; i < customers.length; i++){
    let Time = customers[i];
    let minTill = Math.min(...tills);
    let minIndex = tills.indexOf(minTill);
    tills[minIndex] += Time;
  }
   return Math.max(...tills);

}


console.log(queueTime([10,2,3,3], 2));
