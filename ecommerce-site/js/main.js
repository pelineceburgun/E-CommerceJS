document.addEventListener('DOMContentLoaded',function(){
    let products=document.querySelector('.products')
    async function fetchProducts(url) {
        try{
            let data=await fetch(url);
            let response=await data.json();        
         for(let i=0;i<response.length;i++){
         let description=response[i].description;
         let product_title=response[i].title;
         products.innerHTML+=`
         <div class="product">
            <img src="${response[i].image[1]}" alt="${response[i].category.name}" class="product-img">
            <div class="product-content">
            <h4 class="product-category">${response[i].category.name}</h4>
            <p class="product-description">${description.length>80? description.substring(0,80).concat('...more'):description}</p>
            <div class="product-price-container">
               <h3 class="product-price">$${response[i].price}</h3>
               <a href="#!" data-productId="${response[i].id}" class="add-to-cart"></a>
            </div>
            </div>
          </div>  
         `;
        }
    }
    catch(err){
        console.log(err);
    }
}

    fetchProducts('https://fakestoreapi.com/products')
})



