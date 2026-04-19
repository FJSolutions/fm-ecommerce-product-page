import type { CartItem, Product } from "./types.ts";
import { proxy } from "valtio/vanilla";

interface AppState {
   cart: CartItem[]
   showBackdrop: boolean
   showCart: boolean
   showMobileMenu: boolean
   selectedProduct: Product
}

export const products: Product[] = [
   {
      id: "sneakers-01",
      name: "Fall Limited Edition Sneakers",
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 125.00
   }
]

export const appState = proxy<AppState>({
   cart: [],
   selectedProduct: products[0],
   showBackdrop: false,
   showCart: false,
   showMobileMenu: false
})

export const actions = {
   addToCart: (product: CartItem) => {
      const productToAdd = appState.cart.find((p: Product) => p.id === product.id);
      if (productToAdd) {
         productToAdd.quantity += product.quantity;
      } else {
         appState.cart.push(product);
      }
   },
   removeFromCart: (id: string) => {
      appState.cart = appState.cart.filter((p: Product) => p.id !== id)
   },
   showCart: (show: boolean) => {
      appState.showCart = show
      appState.showBackdrop = show
      appState.showMobileMenu = false
   },
   showMobileMenu: (show: boolean) => {
      appState.showCart = false
      appState.showBackdrop = show
      appState.showMobileMenu = show
   },
   hideMenuAndCart: () => {
      appState.showCart = false
      appState.showBackdrop = false
      appState.showMobileMenu = false
   }
}