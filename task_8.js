let people = new Map([
  ["child", "small"],
  ["woman", "medium"],
  ["man", "big"]
]);
people.forEach ((value, key) => {
               console.log(`ключ - ${key}, значение - ${value}.`);
});
