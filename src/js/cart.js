fetch("https://63372212132b46ee0bddc50f.mockapi.io/product")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    localStorage.setItem("products", JSON.stringify(data));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));
let basket = JSON.parse(localStorage.getItem("basket")) || [];

function removeItemFromCart(productId) {
  cart = cart.filter((item) => item.id != productId);
  basket = basket.filter((item) => item.id != productId);

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("basket", JSON.stringify(basket));

  document.querySelector(".tbody").innerText = "";
  loadCart(); // Reload the cart dynamically instead of reloading the whole page
  getTotal();
}

let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (!search) {
    basket.push({ id: id, item: 1 });
  } else {
    search.item++;
  }

  localStorage.setItem("basket", JSON.stringify(basket));
  update(id);
  getTotal();
};

let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (!search || search.item === 0) return;

  search.item--;

  if (search.item === 0) {
    basket = basket.filter((item) => item.id !== id);
  }

  localStorage.setItem("basket", JSON.stringify(basket));
  update(id);
  getTotal();
};

let update = (id, price) => {
  let search = basket.find((x) => x.id === id);

  console.log(search.price);
  document.getElementById(id).innerHTML = search.item;
};
//make rows

const loadCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let basket = JSON.parse(localStorage.getItem("basket")) || [];

  document.querySelector(".tbody").innerHTML = cart
    .map((product, index) => {
      let basketItem = basket.find((item) => item.id == product.id) || {
        item: 0,
      };

      return `<tr>
        <th scope="row">${index + 1}</th>
        <td><img src="${product.img}" class="cart-img"></td>
        <td><a href="./details.html?product_id=${
          product.id
        }" class="text-decoration-none fw-bolder card-title">${
        product.name
      }</a></td>
        <td>
          <div class="container quantity-form">
            <div class="container quantity-input">
              <button onclick="decrement(${
                product.id
              })" class="fa-solid fa-minus"></button>
              <div id="${
                product.id
              }" class="quantity-value card-title text-light">${
        basketItem.item
      }</div>
              <button onclick="increment(${
                product.id
              })" class="fa-solid fa-plus"></button>
            </div>
          </div>
        </td>
        <td class="card-title">${product.price} $</td>
        <td><button onclick="removeItemFromCart(${
          product.id
        })" class="btn btn-outline-light delete-product"><i class="fa-solid fa-trash"></i></button></td>
      </tr>`;
    })
    .join("");

  getTotal();
};

window.addEventListener("DOMContentLoaded", loadCart);

document.querySelector(".buy-btn").addEventListener("click", () => {
  alert("This is just a personal project👽");
});

// let TotalAmount = () => {
//   if(basket.length !== 0 ){
//     let amount = basket.map((x) =>{
//       let {item , id} = x;
//       let search = products.find((y) => y.id === id) || [];

//       return item * search.price;

//     })
//     console.log(amount);
//   }
//   else return;
// }

// TotalAmount();

function getTotal() {
  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  let products = JSON.parse(localStorage.getItem("products")) || [];

  let total = basket.reduce((acc, basketItem) => {
    let product = products.find((p) => p.id == basketItem.id);
    return acc + (product ? product.price * basketItem.item : 0);
  }, 0);

  document.querySelector(
    ".total-price"
  ).innerHTML = `<h1 class="text-dark total-price">Total price: <span class="text-dark">$${total.toFixed(
    2
  )}</span></h1>`;
}

getTotal();

// function getTotal() {
//   let quantity = JSON.parse(localStorage.getItem("basket"));
//   let temp2 = quantity.map((basket) => {
//     return parseFloat(basket.item);
//   });
//   let quantity2 = temp2.reduce((prev, next) => {
//     return next + prev
//   });
//   let temp = cart.map((item) => {
//     return parseFloat(item.price);
//   }, 0);
//   let sum = temp.reduce(function (prev, next) {
//     return prev + next * quantity2 ;
//   }, 0);

//   document.querySelector(
//     ".total-price"
//   ).innerHTML = `<h1 class="text-dark  total-price">Total price: <span class="text-dark">$${sum}</span></span></h1> `;
// }
