
baseUrl = "https://kamillafagerland.com/neesiteAPI/wp-json/wc/store/products?_embed"
const productContainer = document.querySelector(".productsApi");

async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();
  products.forEach(function(product){
    productContainer.innerHTML +=`
    <a href="/detail.html?id=${product.id}" class="productsApi">
    <h2>${product.name}</h2> 
    <img class="product-image" style="background-image:url('${product.images[0].src}')"></img>
    </a> 
    `
  })

}

getProducts(baseUrl);






