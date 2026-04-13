import { Nav } from "./components/Nav.tsx";
import { Footer } from "./components/Footer.tsx";
import { Lightbox } from "./components/Lightbox.tsx";
import { SneakerDetails } from "./components/SneakerDetails.tsx";
import { Fragment } from "preact";
import { actions, appState } from "./state/app-state"
import { useSnapshot } from "valtio/react";

export function App() {
   const snap = useSnapshot(appState);

   const backdrop = snap.showBackdrop ? <div class="backdrop" onClick={actions.hideMenuAndCart}></div> : <Fragment/>

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
