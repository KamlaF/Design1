const detailContainer= document.querySelector(".gameDetail");
const queryString= document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

const url ="https://kamillafagerland.com/neesiteAPI/wp-json/wc/store/products/" + id + "?_embed/";

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
        
             detailContainer.innerHTML +=`
              <h1>${products.name}</h1>
              <div class="productDetailImage" style="background-image:url('${products.images[0].src}')"></div>
              <h2>${products.prices.price}$</h2>
              <p>${products.short_description}</p>
              <a href="/cart.html"><button class="add-cart2">Add to Cart</button></a>
            
              `
              ;
            }
          
        

     getProductsDetails()
     

    
