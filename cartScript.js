let carts = document.querySelectorAll(".add-cart, .add-cart2");


let products = document.querySelector(".gameDetail")

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".bag span ").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".bag span ").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".bag span ").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log("my cart items are", cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  console.log("the product $ is", product.price);

  let cartCost = localStorage.getItem("totalCost");

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productsContainer = document.querySelector(".product-cart");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && productsContainer) {
    productsContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productsContainer.innerHTML += `
        <div class="product">   
            <i class="fa-sharp fa-solid fa-circle-xmark" ></i> 
            <img src="./images/${item.tag}.jpg">
            <span>${item.name}</span>
            </div>
        <div class="price">$${item.price},00</div>
        <div class="quantity">
             <i class="fa-solid fa-caret-left"></i>
             <span>${item.inCart}</span>
             <i class="fa-solid fa-caret-right"></i>
        </div>
        
        <div class="total">
        $${item.inCart * item.price},00</div>
        `;
    });

    productsContainer.innerHTML += `
    <div class="basketTotalContainer" >
        <h4 class= "basketTotalTitle">
        Basket Total</h4>
        <h4 class= "basketTotal">$${cartCost},00</h4>`;
  }
}

onLoadCartNumbers();
displayCart();

var buttons = document.querySelectorAll(".size");

for (button of buttons) {
  button.addEventListener("click", function () {
    for (button of buttons) {
      button.style.backgroundColor = "buttonface";
      button.style.color = "black";
    }
    this.style.backgroundColor = "black";
    this.style.color = "white";
  });
}
