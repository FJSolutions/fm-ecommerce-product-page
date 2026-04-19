import { useSnapshot } from "valtio/react";
import { lightboxState, actions } from "../state/lightbox-state.ts";

export const Lightbox = () => {
   const snap = useSnapshot(lightboxState)

   return (
      <section class="lightbox">
         <figure class="lightbox-main">
            <img src={`/images/image-product-${snap.activeImage}.jpg`}
                 alt={`product ${snap.activeImage}`}
                 width="1000"/>
         </figure>
         <ul class="lightbox-list">
            <li class={snap.activeImage === 1 ? "active" : ""}>
               <button aria-labelledby="view product 1" onClick={() => actions.setActiveImage(1)}>
                  <img src="/images/image-product-1-thumbnail.jpg" alt="product 1 thumbnail"/>
               </button>
            </li>
            <li class={snap.activeImage === 2 ? "active" : ""}>
               <button aria-labelledby="view product 2" onClick={() => actions.setActiveImage(2)}>
                  <img src="/images/image-product-2-thumbnail.jpg" alt="product 2 thumbnail"/>
               </button>
            </li>
            <li class={snap.activeImage === 3 ? "active" : ""}>
               <button aria-labelledby="view product 3" onClick={() => actions.setActiveImage(3)}>
                  <img src="/images/image-product-3-thumbnail.jpg" alt="product 3 thumbnail"/>
               </button>
            </li>
            <li class={snap.activeImage === 4 ? "active" : ""}>
               <button aria-labelledby="view product 4" onClick={() => actions.setActiveImage(4)}>
                  <img src="/images/image-product-4-thumbnail.jpg" alt="product 4 thumbnail"/>
               </button>
            </li>
         </ul>
      </section>
   )
}