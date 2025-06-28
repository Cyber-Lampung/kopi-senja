const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

angka.forEach(function (n) {
  console.log(n * 3);
});

const newn = angka.map(function (n) {
  return n * 2;
});

console.log(newn);

const data = angka.find(function (n) {
  return n > 3;
});

console.log("ini adalah find : ", data);

const umur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const index = angka.findIndex((item) => item === 1);
console.log("ini adalah findIndex: ", index);
