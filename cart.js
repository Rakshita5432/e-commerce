function loadcart(){
    const cartitems=document.getElementById("cart-items");
    const subtotal=document.getElementById("subtotal");

    let cart=JSON.parse(localStorage.getItem("cart"))||[];

    if(cart.length===0){
        cartitems.innerHTML="<p>your cart is empty</p>";
        subtotal.innerHTML="";

        document.getElementById("checkoutbtn").style.display='none';
        return;
    }

    let total=0;
    cartitems.innerHTML=cart.map((item,index) =>{
        total += item.price;
        return `
        
        <div class="cart-item">
        <div>
        <img class="image" src=${item.image} />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="price">Rs ${item.price}</div>
    </div>
        <button onclick="removefromcart(${index})">remove</button>

    </div>
        `;
    })
    .join("");

subtotal.innerHTML=`<strong> subtotal:</strong> Rs ${total}`;
document.getElementById("checkoutbtn").style.display='inline-block';

}
function removefromcart(index){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadcart();
}

document.getElementById("checkoutbtn").addEventListener("click", () => {
    window.location.href= "checkout.html";
});

loadcart();