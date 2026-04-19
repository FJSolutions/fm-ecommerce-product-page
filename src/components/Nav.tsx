import { Fragment } from "preact";
import { useSnapshot } from "valtio/react";
import { appState, actions } from "../state/app-state.ts";

export const Nav = () => {
   const snap = useSnapshot(appState)

   const toggleHamburger = () => {
      actions.showMobileMenu(!snap.showMobileMenu)
   }

   const removeCartItem = (id: string) => {
      actions.removeFromCart(id)
   }

   const cartBadge = snap.cart.length === 0 ? <Fragment/> : <div class="badge">{
      snap.cart.flatMap(item => item.quantity)
   }</div>

   const cartDialogContents = snap.cart.length === 0
      ? <p>Your cart is empty</p>
      : (<div class="cart-full">
            {snap.cart.map((item) => (
               <div class="cart-item">
                  <img src="/images/image-product-1-thumbnail.jpg" alt={item.name} width={48} height={48}/>
                  <p>
                     {item.name}<br/>
                     ${item.price.toFixed(2)} x {item.quantity}
                     &nbsp;
                     <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                  <button aria-label="delete cart item" onClick={() => removeCartItem(item.id)}>
                     <img src="/images/icon-delete.svg" alt={item.name}/>
                  </button>
               </div>
            ))}
            <button>Checkout</button>
         </div>
      )

   return (
      <>
         <nav>
            <button class="hamburger"
                    aria-label="show menu"
                    aria-expanded={snap.showMobileMenu}
                    aria-controls="main-menu"
                    aria-haspopup="true"
                    onClick={toggleHamburger}>
               <svg stroke="currentColor" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100">
                  <rect width="80" height="10" x="10" y="20" rx="5" ry="5"
                        class="hamburger-line hamburger-line-top"></rect>
                  <rect width="80" height="10" x="10" y="50" rx="5" ry="5"
                        class="hamburger-line hamburger-line-middle"></rect>
                  <rect width="80" height="10" x="10" y="80" rx="5" ry="5"
                        class="hamburger-line hamburger-line-bottom"></rect>
               </svg>
            </button>
            <h1>sneakers</h1>
            <ul id="main-menu">
               <li><a href="#">Collections</a></li>
               <li><a href="#">Men</a></li>
               <li><a href="#">Women</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
         </nav>
         <div class="nav-right-buttons">
            <button type="button"
                    class="button-icon"
                    onClick={() => actions.showCart(!appState.showCart)}
                    aria-label="shopping cart"
                    aria-controls="cart-popup"
                    aria-expanded={appState.showCart}>
               <svg width="16" height="16" viewBox="0 0 22 20" role="img" aria-labelledby="shopping cart">
                  <path
                     d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                     fill="currentColor" fill-rule="nonzero"/>
               </svg>
               {cartBadge}
            </button>
            <img src="/images/image-avatar.png" alt="avatar" class="avatar" width="32" height="32"/>
         </div>
         <dialog id="cart-popup" class="cart-popup" popover-open={appState.showCart}>
            <h2>Cart</h2>
            {cartDialogContents}
         </dialog>
      </>
   )
}
