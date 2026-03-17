import { Nav } from "./components/Nav.tsx";
import { Footer } from "./components/Footer.tsx";
import { Lightbox } from "./components/Lightbox.tsx";
import { SneakerDetails } from "./components/SneakerDetails.tsx";

export function App() {

   return (
      <>
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
