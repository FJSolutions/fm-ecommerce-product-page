import { proxy } from "valtio/vanilla";

export type ImageIndex = 1 | 2 | 3 | 4

interface LightboxState {
   activeImage: ImageIndex
}

export const lightboxState = proxy<LightboxState>({
   activeImage: 1,
})

export const actions = {
   setActiveImage: (id: ImageIndex) => {
      lightboxState.activeImage = id
   },
   nextImage: () => {
      if (lightboxState.activeImage + 1 > 4) {
         lightboxState.activeImage = 1
      } else {
         lightboxState.activeImage += 1
      }
   },
   previousImage: () => {
      if (lightboxState.activeImage - 1 < 1) {
         lightboxState.activeImage = 4
      } else {
         lightboxState.activeImage -= 1
      }
   }
}