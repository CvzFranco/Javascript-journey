const products = [
  {
    _id: 1,
    name: "Formation complète Angular",
    description: "Apprenez le framework Frontend Angular",
    price: 25994,
    soldPrice: 5199,
    category: "Frontend",
    status: "Sold",
    imageUrl: "/assets/images/slider/2.png",
    createdAt: "01/08/2021 14:45:58",
    updateAt: null,
  },
  {
    _id: 2,
    name: "Formation complète Symfony",
    description: "Apprenez le framework Backend Symfony",
    price: 19052,
    soldPrice: 3810,
    category: "Bakend",
    status: "New",
    imageUrl: "/assets/images/slider/12.png",
    createdAt: "01/08/2021 14:45:58",
    updateAt: null,
  },
];

// products.forEach((products) => {
//   console.log(products.name);
// });

//Convertir JS en JSON -> JSON.stringify

const productsJSON = JSON.stringify(products);

//Convertir du JSON en JS -> JSON.Parse()

const productsJS = JSON.parse(productsJSON);
