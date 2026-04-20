import { useSnapshot } from "valtio/react";
import { lightboxState, actions as lightboxActions, type ImageIndex } from "../state/lightbox-state.ts";
import { appState, actions as appActions } from "../state/app-state.ts";
import type { TargetedMouseEvent } from "preact";

export const Lightbox = () => {
   const lightboxSnap = useSnapshot(lightboxState)
   const appSnap = useSnapshot(appState)

   const handleThumbnailClick = (e: TargetedMouseEvent<HTMLButtonElement>, index: ImageIndex) => {
      lightboxActions.setActiveImage(index)
      e.stopPropagation()
   }

   const handleShowLightbox = (e: TargetedMouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (!appSnap.showLightbox) {
         appActions.showLightbox()
      }
   }

   const handlePreviousImage = (e: TargetedMouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      lightboxActions.previousImage()
   }

   const handleNextImage = (e: TargetedMouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      lightboxActions.nextImage()
   }

   return (
      <section class="lightbox">
         <figure class="lightbox-main" onClick={handleShowLightbox}>
         <button class="lightbox-button close" aria-label="close lightbox"
                 onClick={appActions.hideMenuAndCart}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2.5"
                 stroke-linecap="round" stroke-linejoin="round">
               <path d="M18 6L6 18M6 6l12 12" stroke="currentColor"></path>
            </svg>
         </button>
            <button class="lightbox-button previous" aria-label="previous image"
                    onClick={handlePreviousImage}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24">
                  <path d="M10 12L6 8l4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
               </svg>
            </button>
            <img src={`/images/image-product-${lightboxSnap.activeImage}.jpg`}
                 alt={`product ${lightboxSnap.activeImage}`}
                 width="1000"/>
            <button class="lightbox-button next" aria-label="next image"
                    onClick={handleNextImage}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24">
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M6 12l4-4-4-4"/>
               </svg>
            </button>
         </figure>
         <ul class="lightbox-list">
            <li class={lightboxSnap.activeImage === 1 ? "active" : ""}>
               <button aria-label="view product 1" onClick={e => handleThumbnailClick(e, 1)}>
                  <img src="/images/image-product-1-thumbnail.jpg" alt="product 1 thumbnail"/>
               </button>
            </li>
            <li class={lightboxSnap.activeImage === 2 ? "active" : ""}>
               <button aria-label="view product 2" onClick={e => handleThumbnailClick(e, 2)}>
                  <img src="/images/image-product-2-thumbnail.jpg" alt="product 2 thumbnail"/>
               </button>
            </li>
            <li class={lightboxSnap.activeImage === 3 ? "active" : ""}>
               <button aria-label="view product 3" onClick={e => handleThumbnailClick(e, 3)}>
                  <img src="/images/image-product-3-thumbnail.jpg" alt="product 3 thumbnail"/>
               </button>
            </li>
            <li class={lightboxSnap.activeImage === 4 ? "active" : ""}>
               <button aria-label="view product 4" onClick={e => handleThumbnailClick(e, 4)}>
                  <img src="/images/image-product-4-thumbnail.jpg" alt="product 4 thumbnail"/>
               </button>
            </li>
         </ul>
      </section>
   )
}