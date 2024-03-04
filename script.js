const main = document.querySelector("main");
const xhr = new XMLHttpRequest();
const requestedUrl ="https://fakestoreapi.com/products";
// const requestedUrl2 ="https://api.escuelajs.co/api/v1/products";
xhr.open("GET",requestedUrl);
// console.log(xhr.readyState)
xhr.onreadystatechange = function(){
console.log(xhr.readyState)
if(xhr.readyState === 4){
let data;
    // console.log(this.responseText)
     data = JSON.parse(this.responseText)
    // console.log(data)
    data.forEach((item)=>{
        // console.log(item)
        createProduct(item)
        })
}

}
xhr.send();

// function createProduct(a){
// const productCard = document.createElement("div")
// productCard.setAttribute("class","product")
// productCard.setAttribute("id",`${a.id}`)
// // console.log(a)
// const productImage = document.createElement("IMG");
// productImage.setAttribute("src",`${a.image}`)
// productImage.setAttribute("class","product-image")
// // console.log("hello")
// const productTitle = document.createElement("h4");
// productTitle.textContent = `${a.title}`
// productTitle.setAttribute("class","product-title")
// productCard.appendChild(productImage)
// productCard.appendChild(productTitle)
// main.appendChild(productCard);

// }



// main.addEventListener("click",(e)=>{
//     if(e.target.className === "product-image"){
//         console.log("clicked ")
//     }
//     if(e.target.className === "product-title"){
//         console.log("clicked ")
//     }
// })


function createProduct(item){
    const productCard = document.createElement("div")
    productCard.setAttribute("class","product")
    const div1 = document.createElement("div")
    div1.setAttribute("class","product-image-parent")
    const productImage = document.createElement("IMG")
    productImage.setAttribute("src",`${item.image}`)
    productImage.setAttribute("class",`product-image`)
    div1.appendChild(productImage);
    const div2 = document.createElement("div")
    div2.setAttribute("class","product-details")
    const productTitle = document.createElement("h3")
    const productPrice = document.createElement("h4")
    productTitle.appendChild(
    document.createTextNode(`${item.title}`)
    )
    productPrice.appendChild(
    document.createTextNode(`₹${(item.price * 82.92).toFixed(2)} `)
    )
    div2.appendChild(productTitle);
    div2.appendChild(productPrice);
    productCard.appendChild(div1);
    productCard.appendChild(div2);
    main.appendChild(productCard);
}