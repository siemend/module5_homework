let array = ["Маша", "любит", true, 1];
array.forEach(function(item, index, array) {

  // console.log(item, typeof item)

});
const even = (element) => element % 2 === 0;

console.log(array.some(even));