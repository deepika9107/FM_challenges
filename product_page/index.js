let shoppingCrt = document.getElementById('shoppingCart');
var item = document.getElementById('items');
let cart = document.getElementById('cart')
let addBtn = document.getElementById('add');
let delBtn = document.getElementById('delete');
var menuBtn = document.getElementById('menuBtn');
var item_num = document.querySelector('.item-num');
var model_mode = false;

// increasing and decreasing product count
counter = 0;
document.getElementById('decrease').addEventListener('click',()=>{
    counter === 0 ? counter:counter--;
    item.innerHTML = counter;
})
document.getElementById('increase').addEventListener('click',()=>{
    counter++;
    item.innerHTML = counter;
})

// toggling cart button
shoppingCrt.addEventListener('click',()=>{
    document.querySelector('.cart').classList.toggle('hidden');
})

// deleting cart item
function delete_cart_item(){
    document.querySelector('.cart-item').classList.add('hidden');
    document.getElementById('label').style.display='block';
    item_num.classList.add('hidden');

}

// adding delete items funcitonality
delBtn.addEventListener('click',delete_cart_item)

// addding item to the cart

addBtn.addEventListener('click',()=>{
    if(counter==0){
        delete_cart_item()
        
        
  }
    else{
        item_num.classList.remove('hidden');
        item_num.innerHTML = counter;
        document.getElementById('label').style.display='none';
        document.querySelector('.cart-item').classList.remove('hidden');
        document.getElementById('cost').innerHTML =`$125.00 x ${counter} $${counter*125.00}.00`
    }
 
})

// menu button functionality
menuBtn.addEventListener('click',()=>{
  document.querySelector('.overlay').classList.remove('hidden');
  document.querySelector('.navBar').classList.replace('navBar','sideNavBar');
  
 
})
console.log(document.getElementsByTagName('nav'))
document.getElementById('closeBtn').addEventListener('click',()=>{
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.sideNavBar').classList.replace('sideNavBar','navBar');
  
})

// model pop up
document.getElementById('model-closeBtn').addEventListener('click',()=>{
  document.querySelector('.overlay').classList.add('hidden');
  document.querySelector('.model-product-image').style.display = 'none';
  model_mode=false;
})

 var model_slide = document.querySelectorAll(".product-slider .slide");

 
 model_slide.forEach((e)=>{
  e.addEventListener('click',()=>{
    model_mode=true;
    document.querySelector('.overlay').classList.remove('hidden');
    document.querySelector('.model-product-image').style.display = 'flex';
    
  })
 })


// product slider
var slideIndex = 1;
function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function plusDive(n){
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var i;
    var model_pclass;
    var model_tclass;
    if(model_mode==true){
      model_pclass = 'model-product-slider slide';
      model_tclass = 'model-thumbnail-slider slide'
    }else{
      model_pclass = 'product-slider slide';
      model_tclass = 'thumbnail-slider slide'
    }
    
    var x = document.getElementsByClassName(model_pclass);
    var dots = document.getElementsByClassName(model_tclass);
    console.log(x,dots)
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