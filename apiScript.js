
baseUrl = "https://kamillafagerland.com/neesiteAPI/wp-json/wc/store/products?_embed"
const productContainer = document.querySelector(".productsApi");
const spinner = document.querySelector(".spinner")



async function getProducts(url){
  const response = await fetch(url);
  const products = await response.json();

  productContainer.innerHTML = "";
  
  products.forEach(function(product){

    console.log(products);
    
    
    productContainer.innerHTML +=`
    
   
   
    <a href="/detail.html?id=${product.id}" class="productsApiInner">
    <img class="product-image" style="background-image:url('${product.images[0].src}')"></img>
    <h2 class="innerH2">${product.name}</h2> 
    <button class="moreInfo">More info</button>
    </a> 
    `
  })

  

}

getProducts(baseUrl);






