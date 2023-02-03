let array = [undefined, 14, null, 1, 2, 9, 12, "массив"];
let oddCount = 0;
let numberCount = 0;
let evenCount = 0;
let zeroCount = 0;
let otherCount = 0;
for (let item = 0; item < array.length; item++) {
    if (typeof array[item] === "number" || !isNaN(array[item])) {
        numberCount += 1;
        if (array[item] === null) {
            zeroCount += 1;
        } else if (array[item] % 2 === 0) {
            evenCount += 1;
          } else if (array[item] % 1 === 0){
            oddCount += 1;
        }
      else (typeof array(item) === String || Boolean || Symbol || Object)
        otherCount += 1;
      }
    }

console.log(`Массив содержит: ${numberCount} номеров, ${zeroCount} нулевой элемент, ${evenCount} чётных элементов, ${oddCount} нечётных элементов, ${otherCount} других элементов`);
