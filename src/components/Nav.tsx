import "./Nav.module.css"

export const Nav = () => {
   return (
      <nav>
         <div>
            <h1>Sneakers</h1>
            <ul>
               <li><a href="#">Collections</a></li>
               <li><a href="#">Men</a></li>
               <li><a href="#">Women</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
         </div>
         <div>
            <img src="/images/icon-cart.svg" alt="shopping cart" id="shopping-cart" width="32" height="32"/>
            <img src="/images/image-avatar.png" alt="avatar" id="avatar" width="32" height="32"/>
         </div>
      </nav>
   )
}
