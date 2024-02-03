import { products } from "../data/product.js";
import {cart , addToCart } from "../data/cartdata.js";

let productHtml = "";

    products.forEach((product) => {
        productHtml += `
        <div class="product">
        <img src="${product.image}">
        <div class="description">
            <span>Adidas</span>
            <h5>${product.name}</h5>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <h4>₹ ${product.price}</h4>
        </div>
        <i class="fa-solid fa-cart-shopping cart-symbol  js-add-to-cart"
        data-product-id="${product.id}"></i>
        <h6 class="added-${product.id}"></h6>
    </div>
        `
    });
    
document.querySelector('.js-product-container').innerHTML = productHtml;


document.querySelectorAll('.js-add-to-cart').forEach((button)=> {
    button.addEventListener('click' ,()=> {
    const productId = button.dataset.productId;
    addToCart(productId);

    document.querySelector(`.added-${productId}`).innerHTML = 'Added';

    setTimeout(function(){
        document.querySelector(`.added-${productId}`).innerHTML = '';
    }, 2000)
    
    });
  });