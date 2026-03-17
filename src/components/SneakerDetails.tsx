import { useAtom } from "jotai";
import { cartTotalAtom } from "../state/atoms.ts";
import "./SneakerDetails.module.css"

export const SneakerDetails = () => {
   const total = useAtom(cartTotalAtom)

   return (
      <section>
         <p class="company-name">Sneaker Company</p>
         <h3>Fall Limited Edition Sneakers</h3>
         <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,
            they’ll withstand everything the weather can offer.
         </p>

         <p>
            <span>$125.00</span>
            <span>50%</span>
            <span>$250.00</span>
         </p>

         <div class="cart-quantity">
            <button type="button" aria-label="add an item">+</button>
            <span>{total}</span>
            <button type="button" aria-label="remove an item">-</button>
         </div>
         <button type="button">
            <img src="/images/icon-cart.svg" width="15" height="15" alt="cart icon"/>
            <span>Add to cart</span>
         </button>
      </section>
   )
}