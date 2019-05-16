const adidasModel = require('./index.js');

const productNamePool = [
  'NMD_R1 SHOES',
  'SUPERSTAR SHOES',
  'NITE JOGGER SHOES',
]

//random interger between min and max
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * Math.floor(max - min) + min);
};

//properties setup (id and price)
const dataFramework = (arr) => {
  let idCount = 0;
  while (arr.length < 100) {
      arr.push({productID: 0, productName: '', imageUrl: [], price: 0, detail: '', specification: [] })
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].productID = idCount;
    idCount++;
    arr[i].price = getRandomInt(8, 15) * 10;
  }
  return arr;
}

let result = []
console.log(dataFramework(result));