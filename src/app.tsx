import { Nav } from "./components/Nav.tsx";
import { Footer } from "./components/Footer.tsx";
import { Lightbox } from "./components/Lightbox.tsx";
import { SneakerDetails } from "./components/SneakerDetails.tsx";
import { backdropAtom, mobileMenuAtom, popoverAtom } from "./state/atoms.ts";
import { Fragment } from "preact";
import { useAtom, useSetAtom } from "jotai";

export function App() {
   const [showBackdrop, setShowBackdrop] = useAtom(backdropAtom)
   const setShowCart = useSetAtom(popoverAtom)
   const setShowMenu = useSetAtom(mobileMenuAtom)

   const dismissBackdrop = () => {
      const toggle = false;
      setShowBackdrop(toggle)
      setShowCart(toggle)
      setShowMenu(toggle)
   }

   const backdrop = showBackdrop ? <div class="backdrop" onClick={dismissBackdrop}></div> : <Fragment/>

   return (
      <>
         <header>
            {backdrop}
            <Nav/>
         </header>
         <main>
            <Lightbox/>
            <SneakerDetails/>
         </main>
         <footer>
            <Footer/>
         </footer>
      </>
   )
}
