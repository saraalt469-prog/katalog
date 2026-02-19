let products = [
  {
    id: 1,
    name: "Блестки розовые",
    price: 3434,
    description: "Сумка цветочек выполненная из хлопковой ткани, черного цвета",
    image:
      "https://i.pinimg.com/736x/98/11/cf/9811cf5d61cbc9a531cdbe1f2a6e10da.jpg",
  },
  {
    id: 2,
    name: "Звездочки серебристые",
    price: 8999,
    description: "Звездочки блестки для декора",
    image:
      "https://i.pinimg.com/1200x/f5/83/47/f58347dbb37092db182d7691bd95856d.jpg",
  },
  {
    id: 3,
    name: "Глитр звезда",
    price: 3333,
    description: "Глитр звезда розовый для макияжа",
    image:
      "https://i.pinimg.com/1200x/b6/80/98/b68098177e45f0a8430a866f3fb26fae.jpg",
  },
];

let wr = document.querySelector(".katalog");
products.forEach((product) => {
  let newCard = document.createElement("div");
  newCard.classList.add("katalog__card");
  newCard.innerHTML = `
        <img class = "card-image" src="${product.image}" alt="${products.name}" />
        <p class="card-name">${product.name}</p>
        <p class="card-pice"> цена: ${product.price}</p>
        <p class="card-description">${product.description}</p>
        <div class="btn-wr">
          <button class="btnBye" onclick="byeProduct(${product.id})">в корзину</button>

        </div>
  `;
  wr.appendChild(newCard);
});

let cart = [];

function byeProduct(productId) {
  let product = products.find((p) => p.id === productId);
  cart.push(product);
  showCart();
}

function showCart() {
  let cartC = document.querySelector(".Cart-content");
  cartC.innerHTML = ``;
  cart.forEach((item) => {
    cartC.innerHTML += `
     <div class='content'>
      <p>${item.name} - ${item.price} ₽</p>
      <button class='btnremove' onclick="removeCart(${item.id})">удалить</button>
    </div>
    `;
  });
}

function removeCart(productId) {
  let index = cart.findIndex((item) => item.id == productId);
  if (index !== -1) cart.splice(index, 1);
  showCart();
}

// let open = document.querySelector(".open-cart");
// function open() {
//   let a = document.querySelector(".cart");
//   a.style.display = "block";
// }
// function close() {
//   document.querySelector(".closeCart").style.display = "none";
// }
