import { atom } from "jotai";
import type { CartItem, Product } from "./types.ts";

export const products: Product[] = [
   {
      id: "sneakers-01",
      name: "Fall Limited Edition Sneakers",
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: 125.00
   }
]

const cartAtomBase = atom(new Array<CartItem>())

export const cartAtom = atom(
   (get) => get(cartAtomBase), // read function
)

export const cartAtomAdder = atom(null,
   (get, set, newValue: CartItem) => {
      const items = get(cartAtomBase)

      // Find if the product is already in the cart
      let item = items.find(item => item.id === newValue.id)
      if (item) {
         item = {...item, quantity: item.quantity + newValue.quantity}
         const arr = items.filter(item => item.id !== newValue.id)
         set(cartAtomBase, [...arr, item])
      } else
         set(cartAtomBase, [...items, {...newValue}])
   }
)

export const cartAtomRemover = atom(null,
   (get, set, newValue: string) => {
      const items = get(cartAtomBase)
      set(cartAtomBase, items.filter(item => item.id !== newValue))
   }
)

export const backdropAtom = atom(false);
export const popoverAtom = atom(false)
export const selectedProductAtom = atom(products[0])
export const mobileMenuAtom = atom(false)
