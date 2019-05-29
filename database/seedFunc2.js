const adidasModel = require('./index.js');

// const pool = [
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7209945d23fd4621a622a88500f619b5_9366/Pharrell_Williams_Hu_Holi_NMD_MC_Shoes_Black_AC7033_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 6,
//     "productName" : "SOBAKOV SHOES",
//     "productType" : "shoes",
//     "price" : 90,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Essencials",
//     "__v" : 0
//   },
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/13aa267673c54fe69200a99101535bf3_9366/Dame_5_Shoes_Turquoise_BB9314_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 7,
//     "productName" : "CROPPED HOODIE",
//     "productType" : "hoodies and sweatshirts",
//     "price" : 90,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Sport Inspired",
//     "__v" : 0
//   },
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5fd74bfb0f534da9933ea9910167be14_9366/Track_Jacket_Black_DV2557_21_model.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 9,
//     "productName" : "POD S3 SHOES",
//     "productType" : "shoes",
//     "price" : 130,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Essencials",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/796f24f638a64857a1e7a9cf01331f4d_9366/U_Path_Run_Shoes_Black_G28108_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 8,
//     "productName" : "SOBAKOV SHOES",
//     "productType" : "shoes",
//     "price" : 140,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Performance",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5598df83a9af4e809275aa0a01057122_9366/LXCON_Shoes_Green_EG0386_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 10,
//     "productName" : "TIRO 19 TRAINING PANTS",
//     "productType" : "pants",
//     "price" : 100,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Performance",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c18da2efe501464ba268a80b00baccbe_9366/Stan_Smith_Shoes_White_M20605_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 11,
//     "productName" : "TIRO 19 TRAINING PANTS",
//     "productType" : "pants",
//     "price" : 140,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Performance",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/42aa2445c0494d45b0c1a9c400d332f9_9366/NMD_R1_Shoes_Pink_BD8029_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 12,
//     "productName" : "SUPERSTAR ORIGINAL SHOES",
//     "productType" : "shoes",
//     "price" : 80,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Performance",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7209945d23fd4621a622a88500f619b5_9366/Pharrell_Williams_Hu_Holi_NMD_MC_Shoes_Black_AC7033_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 13,
//     "productName" : "SOBAKOV SHOES",
//     "productType" : "shoes",
//     "price" : 90,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Essencials",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/c18da2efe501464ba268a80b00baccbe_9366/Stan_Smith_Shoes_White_M20605_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 14,
//     "productName" : "TREFOIL HOODIE",
//     "productType" : "hoodies and sweatshirts",
//     "price" : 110,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Sport Inspired",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/42aa2445c0494d45b0c1a9c400d332f9_9366/NMD_R1_Shoes_Pink_BD8029_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 15,
//     "productName" : "ULTRABOOST SHOES",
//     "productType" : "shoes",
//     "price" : 100,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Origin",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/8e8daf6340a54e3cb874a92a0133e9a2_9366/Pharrell_Williams_SOLARHU_NMD_Shoes_Pink_BB9531_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 16,
//     "productName" : "TREFOIL HOODIE",
//     "productType" : "hoodies and sweatshirts",
//     "price" : 120,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Essencials",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/796f24f638a64857a1e7a9cf01331f4d_9366/U_Path_Run_Shoes_Black_G28108_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 17,
//     "productName" : "CROPPED HOODIE",
//     "productType" : "hoodies and sweatshirts",
//     "price" : 130,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Performance",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/42aa2445c0494d45b0c1a9c400d332f9_9366/NMD_R1_Shoes_Pink_BD8029_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 18,
//     "productName" : "PUREBOOST GO SHOES",
//     "productType" : "shoes",
//     "price" : 120,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Performance",
//     "__v" : 0
//   }, 
//   {
  
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/cae8f200dbb549a59934a9de01175906_9366/3_Stripes_Tee_Green_DV2590_01_standard.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 19,
//     "productName" : "ULTRABOOST SHOES",
//     "productType" : "shoes",
//     "price" : 80,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Sport Inspired",
//     "__v" : 0
//   }, 
//   {
//     "imageUrl" : [
//       "https://assets.adidas.com/images/w_600,f_auto,q_auto/c015b43ecb054f59972da8be01025a1e_9366/3_Stripes_Tee_White_DH3188.jpg"
//     ],
//     "specification" : [
//       "Regular fit",
//       "Lace closure",
//       "Supportive adidas Primeknit 360",
//       "Lightweight and adaptive",
//       "Responsive Boost midsole; Stailizing Torsion Spring",
//       "Weight: 10.9 ounces",
//       "Arch type: Normal; Adptive and lightweight 3D heel frame",
//       "Imported",
//       "Poduct color: Raw White/Cloud White/ Active Orange"
//     ],
//     "similarItems" : [ ],
//     "productID" : 20,
//     "productName" : "TIRO 19 TRAINING PANTS",
//     "productType" : "pants",
//     "price" : 80,
//     "description" : "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. \n  The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology \n  to provide stretch while also holding your foot in place as you run. \n  The second-skin fit follows the shape of your foot to reduce pressure points.",
//     "descriptionSlogan" : "SHOES WITH ENDLESS ENERGY FOR LONG CITY RUNS.",
//     "subClasses" : "Essencials",
//     "__v" : 0
//   }
// ];

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

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * Math.floor(max - min) + min);
};

const addImg = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].imageUrl = imagePool[getRandomInt(0, imagePool.length -1)];
  }
  return arr;
}

addImg(data);

const getRandom = () => {
  let result = [];
  let count = 0;
  while (count < 8) {
    result.push(data[getRandomInt(0, data.length-1)]);
    count++;
  }
  return result;
}

const seedFunc = () => {
  for (let i = 1; i < 100; i++) {
    let result = getRandom();
    adidasModel.updateOne({productID: i}, {similarItems: result})
      .then(() => {
        console.log('data seeded');
      })
      .catch(err => console.log(err));
  }

  // let result = getRandom();
  // console.log(result);
  // adidasModel.updateMany({similarItems: result})
  //   .then(() => {
  //     console.log('data seeded');
  //   })
  //   .catch(err => console.log(err));
}

seedFunc();