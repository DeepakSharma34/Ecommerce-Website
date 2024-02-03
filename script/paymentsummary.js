import { cart } from "../data/cartdata.js";
import { products } from "../data/product.js";

 export function totalPayment() {
     let paymentSummaryHtml = '';
     let productPrice = 0;
     cart.forEach((cartItem) => {
        const productId = cartItem.productId
        let matchingProduct;
        products.forEach((product) => {
         if (product.id === productId) {
           matchingProduct = product;
         }
       });
       productPrice = productPrice+ matchingProduct.price * cartItem.quantity;
     });

  const totalBill  = productPrice;
     console.log(totalBill);

  
     paymentSummaryHtml += `
     <div id="coupon">
     <h3>Apply Coupon</h3>
 <div>
     <input class="js-apply-value" type="text" placeholder="Enter Your Coupon">
     <button class="normal js-apply-coupon">Apply</button>
 </div>
</div>

 <div id="subtotal">
     <h3>CartTables</h3>
     <table>
         <tr>
             <td>Cart Shopping</td>
             <td> ₹ ${totalBill}</td>
         </tr>
         <tr>
             <td>Shipping</td>
             <td>FREE</td>
         </tr>
         <tr>
             <td><strong>Total</strong></td>
             <td><strong>  ₹ ${totalBill}</strong></td>
         </tr>
     </table>

     <button class="normal js-apply-coupon">Proceed To Buy</button>
 </div>
     `

     document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHtml;


document.querySelector('.js-apply-coupon').addEventListener('click' , () => {
    const inputText = document.querySelector('.js-apply-value');
   const inputValue = inputText.value ;
   
   if(inputValue === '') {
    alert("It Is Empty");
   }
   else {
    alert('It Is Invalid');
   }
})

}



