let row1 = document.getElementById("row1")
let row2 = document.getElementById("row2")
let row3 = document.getElementById("row3")
let row4 = document.getElementById("row4")
let row5 = document.getElementById("row5")
let row6 = document.getElementById("row6")


let phoneCategory;
let groceries;
let skincare;
let homedecor;
let womensshoes;

function fetchAllProducts(){
  fetch('https://dummyjson.com/products').then(res => res.json())
.then(res => {
  console.log(res.products);
   const allProducts = res.products;
    localStorage.setItem("allProducts", JSON.stringify(allProducts))
});
}

fetchAllProducts()


function dispAllProd(products) {
    products = JSON.parse(localStorage.getItem("allProducts"))
    phoneCategory = products.filter((el)=> el.category == "smartphones")
    groceries = products.filter((el)=> el.category == "groceries")
    skincare = products.filter((el)=> el.category == "skincare")
    homedecor = products.filter((el)=> el.category == "home-decoration")
    womensshoes = products.filter((el)=> el.category == "womens-shoes")
    

    phoneCategory.forEach((product) => {
    row2.innerHTML += `
        <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" >
           <img src="${product.images[0]}" class="card-img-top" alt="...">
           <div class="card-body">
              <p class="card-title">${product.title}</p>
              <h5 class="card-text">$${product.price}</h5>
           </div>
       </a>
       `
 
  });

  groceries.forEach((product)=> {
    row3.innerHTML += `
    <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" href="addtocart.html?id=${product.id}">
       <img src="${product.images[0]}" class="card-img-top" alt="...">
       <div class="card-body">
          <p class="card-title">${product.title}</p>
          <h5 class="card-text">$${product.price}</h5>
       </div>
   </a>
   `

  });

  skincare.forEach((product)=> {
    row5.innerHTML += `
    <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" href="addtocart.html?id=${product.id}">
       <img src="${product.images[0]}" class="card-img-top" alt="...">
       <div class="card-body">
          <p class="card-title">${product.title}</p>
          <h5 class="card-text">$${product.price}</h5>
       </div>
   </a>
   `

  });

  homedecor.forEach((product)=> {
    row5.innerHTML += `
    <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" href="addtocart.html?id=${product.id}">
       <img src="${product.images[0]}" class="card-img-top" alt="...">
       <div class="card-body">
          <p class="card-title">${product.title}</p>
          <h5 class="card-text">$${product.price}</h5>
       </div>
   </a>
   `

  });


  womensshoes.forEach((product)=> {
    row6.innerHTML += `
    <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" href="addtocart.html?id=${product.id}">
       <img src="${product.images[0]}" class="card-img-top" alt="...">
       <div class="card-body">
          <p class="card-title">${product.title}</p>
          <h5 class="card-text">$${product.price}</h5>
       </div>
   </a>
   `

  });

}

dispAllProd()



    function displayMore(params) {
        let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
        let  newProducts =  theproducts.slice(0,12)  
        newProducts.forEach((product)=> {
       row1.innerHTML += `
        <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" href="addtocart.html?id=${product.id}">
           <img src="${product.images[0]}" class="card-img-top" alt="...">
           <div class="card-body">
              <p class="card-title">${product.title}</p>
              <h5 class="card-text">$${product.price}</h5>
           </div>
       </a>
       `
        })
       
    }


displayMore()

function displayMore1(params) {
  let  theproducts = JSON.parse(localStorage.getItem("allProducts"))
  let  newProducts =  theproducts.slice(0,6)  
  newProducts.forEach((product)=> {
 row4.innerHTML += `
  <a class="card col-lg-2 col-sm-4 itemcard" style="width: 11rem;" href="addtocart.html?id=${product.id}">
     <img src="${product.images[0]}" class="card-img-top" alt="...">
     <div class="card-body">
        <p class="card-title">${product.title}</p>
        <h5 class="card-text">$${product.price}</h5>
     </div>
 </a>
 `
  })
 
}


displayMore1()


    
