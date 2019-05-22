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
  {productID: 1, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 2, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 120},
  {productID: 3, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 4, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 5, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 6, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 7, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productID: 8, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 9, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 10, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 100},
  {productID: 11, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 140}, 
  {productID: 12, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 13, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 14, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 110},
  {productID: 15, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 16, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productID: 17, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 130},
  {productID: 18, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 19, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 20, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 80},
  {productID: 21, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 22, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 80},
  {productID: 23, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 24, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 25, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 26, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productID: 27, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 28, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 29, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 30, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 31, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 32, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 33, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 90},
  {productID: 34, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 35, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 36, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 37, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 38, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 39, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 130},
  {productID: 40, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 41, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 42, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 43, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 44, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 45, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productID: 46, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 47, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 100},
  {productID: 48, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 49, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 50, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 51, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 52, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 53, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 54, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 55, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 56, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 57, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 58, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 59, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 80},
  {productID: 60, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 90},
  {productID: 61, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 62, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 63, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 64, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 90},
  {productID: 65, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 100},
  {productID: 66, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 110},
  {productID: 67, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 68, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 69, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 70, productName: "TIRO 19 TRAINING PANTS", productType: "pants", imageUrl: Array(0), price: 120},
  {productID: 71, productName: "POD S3 SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 72, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 73, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 74, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 100},
  {productID: 75, productName: "CROPPED HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 140},
  {productID: 76, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 77, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 78, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 79, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 80, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 81, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 82, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 83, productName: "PUREBOOST GO SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 84, productName: "SWIFT RUN SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 85, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 86, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 87, productName: "ULTRABOOST SHOES", productType: "shoes", imageUrl: Array(0), price: 120},
  {productID: 88, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 89, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 90, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 91, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 92, productName: "SOBAKOV SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 93, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 110},
  {productID: 94, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 80},
  {productID: 95, productName: "CLOUDFOAM ULTIMATE SHOES", productType: "shoes", imageUrl: Array(0), price: 90},
  {productID: 96, productName: "NITE JOGGER SHOES", productType: "shoes", imageUrl: Array(0), price: 110},
  {productID: 97, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 140},
  {productID: 98, productName: "SUPERSTAR ORIGINAL SHOES", productType: "shoes", imageUrl: Array(0), price: 130},
  {productID: 99, productName: "TREFOIL HOODIE", productType: "hoodies and sweatshirts", imageUrl: Array(0), price: 120},
  {productID: 100, productName: "NMD_R1 SHOES", productType: "shoes", imageUrl: Array(0), price: 120}
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

const imagePool = [
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5598df83a9af4e809275aa0a01057122_9366/LXCON_Shoes_Green_EG0386_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/8e8daf6340a54e3cb874a92a0133e9a2_9366/Pharrell_Williams_SOLARHU_NMD_Shoes_Pink_BB9531_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7209945d23fd4621a622a88500f619b5_9366/Pharrell_Williams_Hu_Holi_NMD_MC_Shoes_Black_AC7033_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/b09c17f44a86428d8707a80b00bc4787_9366/Superstar_Shoes_White_C77154_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c18da2efe501464ba268a80b00baccbe_9366/Stan_Smith_Shoes_White_M20605_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/796f24f638a64857a1e7a9cf01331f4d_9366/U_Path_Run_Shoes_Black_G28108_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/42aa2445c0494d45b0c1a9c400d332f9_9366/NMD_R1_Shoes_Pink_BD8029_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5fd74bfb0f534da9933ea9910167be14_9366/Track_Jacket_Black_DV2557_21_model.jpg",
  "https://assets.adidas.com/images/w_600,f_auto,q_auto/c015b43ecb054f59972da8be01025a1e_9366/3_Stripes_Tee_White_DH3188.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/cae8f200dbb549a59934a9de01175906_9366/3_Stripes_Tee_Green_DV2590_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/13aa267673c54fe69200a99101535bf3_9366/Dame_5_Shoes_Turquoise_BB9314_01_standard.jpg",
  "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/13cf83eaf1ae4e45aa92a8a1016b45c7_9366/Utility_Knee_Socks_Red_BA1968_03_standard.jpg",
];

const subClassesPool = [
  'Performance',
  'Origin',
  'Sport Inspired',
  'Essencials',
  'Athletics'
]

const add = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].description = descriptionPool;
    arr[i].descriptionSlogan = descriptionSloganPool;
    arr[i].specification = specificationPool;
    arr[i].imageUrl = imagePool[getRandomInt(0, imagePool.length -1)];
    arr[i].subClasses = subClassesPool[getRandomInt(0, subClassesPool.length-1)];
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



/*
let data = [
  {
    productID: 1,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 2,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 3,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_06_standard.jpg'
    ],
    price: 100,
    color: 'black'
  },
  {
    productID: 4,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 100,
    color: 'black'
  },
  {
    productID: 5,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Black/Pureboost_Go_Shoes_Black_B37803_07_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 6,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 90,
    color: 'black/white'
  },
  {
    productID: 7,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_41_detail.jpg'
    ],
    price: 90,
    color: 'pink'
  },
  {
    productID: 8,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 140,
    color: 'black/white'
  },
  {
    productID: 9,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 130,
    color: 'grey'
  },
  {
    productID: 10,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 100,
    color: 'blue'
  },
  {
    productID: 11,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 12,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 80,
    color: 'white'
  },
  {
    productID: 13,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 90,
    color: 'black/white'
  },
  {
    productID: 14,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 110,
    color: 'blue'
  },
  {
    productID: 15,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 16,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 17,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_02_laydown.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_25_model.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 18,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 120,
    color: 'blue'
  },
  {
    productID: 19,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_07_standard.jpg'
    ],
    price: 80,
    color: 'white'
  },
  {
    productID: 20,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 21,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black%3AWhite/Sobakov_Shoes_Black_BD7549_07_standard.jpg'
    ],
    price: 120,
    color: 'black/white'
  },
  {
    productID: 22,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 23,
    productName: 'SWIFT RUN SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_06_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/Black/Swift_Run_Shoes_Black_AQ0863_06_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 24,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 25,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 130,
    color: 'black'
  },
  {
    productID: 26,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 27,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 28,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 29,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_06_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 30,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/Black/Ultraboost_Shoes_Black_F36123_06_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 31,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 32,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 33,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 90,
    color: 'blue'
  },
  {
    productID: 34,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 35,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 36,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_07_standard.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 37,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 38,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_06_standard.jpg'
    ],
    price: 80,
    color: 'Mint'
  },
  {
    productID: 39,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 130,
    color: 'black'
  },
  {
    productID: 40,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3.console.aws.amazon.com/s3/object/fecadidas/Adidas%2520JPG/Nite%2520Jogger%2520Shoes%2520-%2520Men/White/Nite_Jogger_Shoes_White_BD7676_010_hover_standard.jpg?region=us-west-1&tab=overview',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_06_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/White/Nite_Jogger_Shoes_White_BD7676_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 41,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 42,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 43,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Mint/POD_S3.1_Shoes_Green_B37465_06_standard.jpg'
    ],
    price: 80,
    color: 'Mint'
  },
  {
    productID: 44,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_41_detail.jpg'
    ],
    price: 80,
    color: 'pink'
  },
  {
    productID: 45,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_02_laydown.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_25_model.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 46,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 90,
    color: 'grey'
  },
  {
    productID: 47,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 100,
    color: 'black'
  },
  {
    productID: 48,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 130,
    color: 'black'
  },
  {
    productID: 49,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 50,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 51,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 52,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 53,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 54,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 80,
    color: 'blue'
  },
  {
    productID: 55,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 56,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 57,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/Black/Cloudfoam_Ultimate_Shoes_Black_BC0018_06_standard.jpg'
    ],
    price: 140,
    color: 'black'
  },
  {
    productID: 58,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview6.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_shoeview1.jpg'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 59,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 80,
    color: 'black'
  },
  {
    productID: 60,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 61,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 120,
    color: 'grey'
  },
  {
    productID: 62,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 63,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 64,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Black/Tiro_19_Training_Pants_Black_D95957_25_outfit.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 65,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 66,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 110,
    color: 'blue'
  },
  {
    productID: 67,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 110,
    color: 'grey'
  },
  {
    productID: 68,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 69,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 70,
    productName: 'TIRO 19 TRAINING PANTS',
    productType: 'pants',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Women+Tiro+19+Training+Pants/Blue/Tiro_19_Training_Pants_Blue_DT5984_41_detail.jpg'
    ],
    price: 120,
    color: 'blue'
  },
  {
    productID: 71,
    productName: 'POD S3 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/POD-S3.1_Women_Shoes/Grey/POD_S3.1_Shoes_Grey_B37458_05_standard.jpg'
    ],
    price: 110,
    color: 'grey'
  },
  {
    productID: 72,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 73,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 74,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_02_laydown.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/White/Cropped_Hoodie_White_DX2321_25_model.jpg'
    ],
    price: 100,
    color: 'white'
  },
  {
    productID: 75,
    productName: 'CROPPED HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Women+Hoodie/Pink/Cropped_Hoodie_Pink_DX2161_41_detail.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 76,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 77,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 80,
    color: 'pink'
  },
  {
    productID: 78,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 90,
    color: 'black'
  },
  {
    productID: 79,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 80,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 81,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 82,
    productName: 'SWIFT RUN SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_06_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 83,
    productName: 'PUREBOOST GO SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_01_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Pureboost/Blue/Pureboost_Go_Shoes_Blue_B37804_06_standard.jpg.png'
    ],
    price: 90,
    color: 'blue'
  },
  {
    productID: 84,
    productName: 'SWIFT RUN SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Swift+Run+ShoesMen/White/Swift_Run_Shoes_White_B37725_06_standard.jpg'
    ],
    price: 140,
    color: 'white'
  },
  {
    productID: 85,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 110,
    color: 'white'
  },
  {
    productID: 86,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 140,
    color: 'black'
  },
  {
    productID: 87,
    productName: 'ULTRABOOST SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard-3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Ultraboost_women/White/Ultraboost_Shoes_White_BB6308_05_standard.jpg'
    ],
    price: 120,
    color: 'white'
  },
  {
    productID: 88,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 89,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 90,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 91,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 140,
    color: 'pink'
  },
  {
    productID: 92,
    productName: 'SOBAKOV SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard-2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Sobakov+Shoes/Black/Sobakov_Shoes_Black_B41968_07_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 93,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_02_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_25_outfit.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Blue/Trefoil_Hoodie_Blue_DV1504_41_detail.jpg'
    ],
    price: 110,
    color: 'blue'
  },
  {
    productID: 94,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 80,
    color: 'white'
  },
  {
    productID: 95,
    productName: 'CLOUDFOAM ULTIMATE SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/CloudFoam+/White/Cloudfoam_Ultimate_Shoes_White_BC0121_06_standard.jpg'
    ],
    price: 90,
    color: 'white'
  },
  {
    productID: 96,
    productName: 'NITE JOGGER SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Nite+Jogger+Shoes+-+Men/Black/Nite_Jogger_Shoes_Black_BD7954_06_standard.jpg'
    ],
    price: 110,
    color: 'black'
  },
  {
    productID: 97,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoes_Blue_BD8030_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoesview6.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_Shoeview2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Blue/NMD_R1_shoeview1.jpg'
    ],
    price: 140,
    color: 'blue'
  },
  {
    productID: 98,
    productName: 'SUPERSTAR ORIGINAL SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_010_hover_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_02_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_03_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_04_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_05_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_06_standard.jpg.png',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Superstar_Originals_Men/Superstar_Shoes_White_C77124_07_standard.jpg'
    ],
    price: 130,
    color: 'white'
  },
  {
    productID: 99,
    productName: 'TREFOIL HOODIE',
    productType: 'hoodies and sweatshirts',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_01_standard.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_21_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_22_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_23_hover_model.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/Adidas+Men+Hoodie/Black/Trefoil_Hoodie_Black_DT7964_25_model.jpg'
    ],
    price: 120,
    color: 'black'
  },
  {
    productID: 100,
    productName: 'NMD_R1 SHOES',
    productType: 'shoes',
    imageUrl: [
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/pinkShoe2.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView1.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView3.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView4.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeView5.jpg',
      'https://s3-us-west-1.amazonaws.com/fecadidas/Adidas+JPG/NMD_R1_Women/Pink/shoeview6.jpg'
    ],
    price: 120,
    color: 'pink'
  }
];
*/