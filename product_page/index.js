let shoppingCrt = document.getElementById('shoppingCart');
var item = document.getElementById('items');
let cart = document.getElementById('cart')
let addBtn = document.getElementById('add');
let delBtn = document.getElementById('delete');

counter = 0;
document.getElementById('decrease').addEventListener('click',()=>{
    counter === 0 ? counter:counter--;
    item.innerHTML = counter;
})
document.getElementById('increase').addEventListener('click',()=>{
    counter++;
    item.innerHTML = counter;
})

shoppingCrt.addEventListener('click',()=>{
    if(shoppingCrt.classList.contains('active')){
        document.getElementById('cart').style.display = 'block';
        shoppingCrt.classList.remove('active');
    }
    else{
        document.getElementById('cart').style.display = 'none';
        shoppingCrt.classList.toggle('active')
    }
})

function delete_cart_item(){
    document.getElementById('cart-item').style.display = 'none';
    document.getElementById('label').style.display='block';
}

delBtn.addEventListener('click',delete_cart_item)

addBtn.addEventListener('click',()=>{
    if(counter==0){
        delete_cart_item()
  }
    else{
        document.getElementById('label').style.display='none';
        document.getElementById('cart-item').style.display = 'block';
        document.getElementById('cost').innerHTML =`$125.00 x ${counter} $${counter*125.00}.00`
    }
 
})




var slideIndex = 1;
function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function plusDive(n){
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("product-slider slide");
    var dots = document.getElementsByClassName("thumbnail-slider slide");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
  }