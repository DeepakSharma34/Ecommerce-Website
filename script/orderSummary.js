import{cart , removeFromCart} from '../data/cartdata.js';
import { products } from '../data/product.js';
import { totalPayment } from './paymentsummary.js';


export function cartDisplay() {

let cartSummaryHTML = '' ;
cart.forEach((cartItem)=> {
    const productId = cartItem.productId;
    let matchingProduct;
       products.forEach((product) => {
        if (product.id === productId) {
          matchingProduct = product;
        }
      });


      cartSummaryHTML += `
      <div class="js-cart-container-${matchingProduct.id}">
      <table width="100%">
                <tbody>
                    <tr>
                        <td><i class="far fa-times-circle js-delete-link"
                        data-product-id="${matchingProduct.id}"></i></td>
                        <td><img src="${matchingProduct.image}"></td>
                        <td>${matchingProduct.name}</td>
                        <td> ₹ ${matchingProduct.price}</td>
                        <td>Quantity : ${cartItem.quantity}</td>
                        <td> ₹ ${matchingProduct.price * cartItem.quantity}</td>
                    </tr>
                </tbody>
             </table>
     </div>
      `
});

document.querySelector('.js-cart-item').innerHTML = cartSummaryHTML;


document.querySelectorAll('.js-delete-link').forEach((link)=> {
    link.addEventListener('click' ,()=> {
      const productId = link.dataset.productId;
       removeFromCart(productId);
      

    const container =    document.querySelector(`.js-cart-container-${productId}`);
    container.remove();
   totalPayment();
    });
});
}