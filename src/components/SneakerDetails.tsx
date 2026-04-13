import { useState } from "preact/hooks";
import { useSnapshot } from "valtio/react";
import { appState, actions } from "../state/app-state.ts";

export const SneakerDetails = () => {
   const [quantity, setQuantity] = useState(0);
   const snap = useSnapshot(appState)

   const reduceQuantity = () => {
      if (quantity > 0)
         setQuantity(quantity - 1)
   }

   const increaseQuantity = () => {
      setQuantity(quantity + 1)
   }

   const addToCart = () => actions.addToCart({...snap.selectedProduct, quantity})

   return (
      <section className="sneaker-details">
         <p class="company-name">Sneaker Company</p>
         <h2>{snap.selectedProduct.name}</h2>
         <p class="product-description">{snap.selectedProduct.description}</p>

         <p class="sneaker-prices">
            <span class="price">${snap.selectedProduct.price.toFixed(2)}</span>
            <span class="discount">50%</span>
            <span class="total">$250.00</span>
         </p>

         <div class="sneaker-cart">
            <div class="cart-quantity">
               <button type="button" aria-label="add an item" onClick={reduceQuantity}>-</button>
               <p>{quantity}</p>
               <button type="button" aria-label="add an item" onClick={increaseQuantity}>+</button>
            </div>

            <button type="button" class="sneaker-add" onClick={addToCart}>
               <svg width="15" height="15" viewBox="0 0 22 20">
                  <path
                     d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                     fill="currentColor" fill-rule="nonzero"/>
               </svg>
               <span>Add to cart</span>
            </button>
         </div>
      </section>
   )
}