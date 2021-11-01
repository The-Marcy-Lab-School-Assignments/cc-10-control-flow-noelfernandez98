//1
function greatestOfTwo(num1, num2){
  if(num1 > num2){
      return num1
  }else{
      return num 2
  }
}
console.log(greatestOfTwo(-2,2))
//2
function greatestOfThree(num 1, num2, num3){
  if(num1 > num2 && num1 > num3){
      return num1
  }else if(num2 > num1 && num2 > num3){
      return num2
  }else{
      return num3
  }
}
 console.log(greatestOfThree(1,2,3))
//3
function greatestOfFour(num1, num2, num3, num4){
  if(num1 > num2 && num1 > num3 && num1 > num 4){
      return num1
  }else if(num2 > num3 && num2 > num4){
      return num 2
  }else if(num3 > num4){
      return num3
  }else{
      return num4
  }
}

console.log(greatestOfFour(10,2,6,11))
//4
function leastOfFour(){
  if(num1 < num2 && num1 < num3 && num1 < num 4){
      return num1
  }else if(num2 < num3 && num2 < num4){
      return num 2
  }else if(num3 < num4){
      return num3
  }else{
      return num4
  }
}
console.log(leastOfFour())