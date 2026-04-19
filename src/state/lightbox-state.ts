import { proxy } from "valtio/vanilla";

type ImageId = 1 | 2 | 3 | 4

interface LightboxState {
   activeImage: ImageId
}

export const lightboxState = proxy<LightboxState>({
   activeImage: 1,
})

export const actions = {
   setActiveImage: (id: ImageId) => {
      lightboxState.activeImage = id
   },
}