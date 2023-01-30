let abc = prompt("Введите значение");
abc = +abc;
console.log(typeof abc);

if (abc % 2 === 0){
  console.log("Это четное число");
}
else if(abc % 1 === 0){
  console.log("Это нечетное число");
}
else{
  console.log("Упс! Кажется вы ошиблись!");
}

if(isNaN(abc)){console.log("NaN")};