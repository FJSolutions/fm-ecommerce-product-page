import { atom, useAtom } from "jotai";

const popoverAtom = atom(false)

export const Nav = () => {
   const [popoverOpen, setPopoverOpen] = useAtom(popoverAtom)

   return (
      <>
         <h1>sneakers</h1>
         <nav>
            <ul>
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
                    onMouseEnter={() => setPopoverOpen(true)}
                    onMouseLeave={() => setPopoverOpen(false)}
                    aria-label="shopping cart"
                    aria-controls="cart-popup"
                    aria-expanded={popoverOpen}>
               <svg width="16" height="16" viewBox="0 0 22 20" role="img" aria-labelledby="shopping cart">
                  <path
                     d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                     fill="currentColor" fill-rule="nonzero"/>
               </svg>
            </button>
            <img src="/images/image-avatar.png" alt="avatar" class="avatar" width="32" height="32"/>
         </div>
         <dialog id="cart-popup" class="cart-popup" popover-open={popoverOpen}>
            <h2>Cart</h2>
            <p>Your cart is empty</p>
         </dialog>
      </>
   )
}
