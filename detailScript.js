const detailContainer= document.querySelector(".game-detail");
const queryString= document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url ="https://kamillafagerland.com/neesiteAPI/wp-json/wc/store/products/" + id + "?_embed";

console.log(id);

console.log(url);

async function getProductsDetails(){

    try{
    const response = await fetch(url);
    const products = await response.json();
    
    

    console.log(products);

    createHtml(products);
    
}catch(error)
{console.log(error);
}}    

    function createHtml(products){  
        
           
              detailContainer.innerHTML += `<h1>${products.name}</h1>
              <h2>${products.prices.price}</h2>
              <div class="productDetail-image" style="background-image:url('${products.images.src}')"></div>
              <a href="/cart.html"><button class="add-cart2">Add to Cart</button></a>
              <p>${products.short_description}
              
              
             
              `
              ;
            }
          
        

     getProductsDetails()
     

    
