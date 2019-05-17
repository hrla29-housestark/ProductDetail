const adidasModel = require('./index.js');

//generate common data for the team
const productNamePool = [
  'NMD_R1 SHOES',
  'SUPERSTAR ORIGINAL SHOES',
  'NITE JOGGER SHOES',
  'SOBAKOV SHOES',
  'PUREBOOST GO SHOES',
  'CLOUDFOAM ULTIMATE SHOES',
  'TREFOIL HOODIE',
  'CROPPED HOODIE', 
  'POD S3 SHOES',
  'SWIFT RUN SHOES',
  'ULTRABOOST SHOES',
  'TIRO 19 TRAINING PANTS',
  'RUNFALCON SHOES'
]

//random interger between min and max
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * Math.floor(max - min) + min);
};

//properties setup (id, price, productName, type)
const dataFramework = (arr) => {
  let idCount = 1;
  while (arr.length < 100) {
      arr.push({productID: 0, productName: '', productType: '', imageUrl: [], price: 0 })
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i].productID = idCount;
    idCount++;
    arr[i].price = getRandomInt(8, 15) * 10;
    arr[i].productName = productNamePool[getRandomInt(0, productNamePool.length-1)];
    // get the type base on name
    if (arr[i].productName.includes('SHOES')) {
      arr[i].productType = 'shoes';
    } else if (arr[i].productName.includes('PANTS')) {
      arr[i].productType = 'pants';
    } else if (arr[i].productName.includes('HOODIE')) {
      arr[i].productType = 'hoodies and sweatshirts'
    } 
  }
  return arr;
}

let result = []
// console.log(dataFramework(result));


//data generated (common)
let data = [
  {productId: 1, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 2, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 120},
  {productId: 3, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productId: 4, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productId: 5, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 6, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 7, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productId: 8, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 9, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 10, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 100},
  {productId: 11, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 140}, 
  {productId: 12, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 13, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 14, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 110},
  {productId: 15, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productId: 16, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productId: 17, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 130},
  {productId: 18, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 19, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 20, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 80},
  {productId: 21, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 22, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 80},
  {productId: 23, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 24, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 25, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 26, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productId: 27, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 28, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 29, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 30, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 31, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 32, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 33, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productId: 34, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 35, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 36, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productId: 37, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 38, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 39, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 130},
  {productId: 40, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 41, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 42, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 43, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 44, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productId: 45, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productId: 46, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 47, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 100},
  {productId: 48, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 49, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 50, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productId: 51, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 52, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 53, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productId: 54, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productId: 55, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 56, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 57, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 58, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 59, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productId: 60, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 90},
  {productId: 61, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 62, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 63, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 64, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 90},
  {productId: 65, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productId: 66, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 110},
  {productId: 67, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 68, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 69, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 70, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 120},
  {productId: 71, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 72, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 73, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 74, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 100},
  {productId: 75, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 140},
  {productId: 76, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 77, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 78, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 79, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 80, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 81, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 82, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 83, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 84, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 85, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 86, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 87, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productId: 88, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 89, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 90, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 91, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 92, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 93, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 110},
  {productId: 94, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productId: 95, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productId: 96, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productId: 97, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productId: 98, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productId: 99, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productId: 100, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 120}
];

//add specifications

const specificationPool = [
  'Regular fit',
  'Lace closure',
  'Supportive adidas Primeknit 360',
  'Lightweight and adaptive',
  'Responsive Boost midsole; Stailizing Torsion Spring',
  'Weight: 10.9 ounces',
  'Arch type: Normal; Adptive and lightweight 3D heel frame',
  'Imported',
  'Poduct color: Raw White/Cloud White/ Active Orange'
];

const descriptionSloganPool = `SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.`;

const descriptionPool =
  `Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. 
  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology 
  to provide stretch while also holding your foot in place as you run. 
  The second-skin fit follows the shape of your foot to reduce pressure points.`;

const add = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].description = descriptionPool;
    arr[i].descriptionSlogan = descriptionSloganPool;
    arr[i].specification = specificationPool;
  }
  return arr;
}

let newData = add(data);


//seed the data to the database
const seefunc = () => {
  adidasModel.create(newData)
    .then(() => {
      console.log('data seeded');
    })
    .catch(err => console.log(err));
};

seefunc();