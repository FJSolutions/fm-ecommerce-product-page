import { Nav } from "./components/Nav.tsx";
import { Footer } from "./components/Footer.tsx";
import { Lightbox } from "./components/Lightbox.tsx";
import { SneakerDetails } from "./components/SneakerDetails.tsx";
import { Fragment } from "preact";
import { actions, appState } from "./state/app-state"
import { useSnapshot } from "valtio/react";

export function App() {
   const snap = useSnapshot(appState);

   const backdrop = () => {
      if (snap.showBackdrop) {
         if (snap.showLightbox) {
            return (<div class="backdrop lightbox-backdrop" onClick={actions.hideMenuAndCart}>
               <Lightbox/>
            </div>)
         }

         return <div class="backdrop" onClick={actions.hideMenuAndCart}></div>
      }

      return <Fragment/>
   }

   return (
      <>
         {backdrop()}
         <header>
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
