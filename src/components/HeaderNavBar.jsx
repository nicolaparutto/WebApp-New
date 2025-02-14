import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderNavBar() {
   const [open, setOpen] = useState(false);
   return (
      <>

         <section className="nav-section">
            <div className="nav-container">
               <div className="nav-logo">
                  <div className="logo">
                     <img src="img/logo.png" alt="logo" />
                  </div>
               </div>
               <nav className="navbar">
                  <div className="nav-user">
                     <i className="fa-solid fa-circle-user" onClick={() => { setOpen(!open) }}></i>
                  </div>
                  <div className="nav-options">
                     <i className="fa-solid fa-gear"></i>
                  </div>
               </nav>
            </div>
            <div>
               {open && (
                  <div className="dropdown-menu">
                     <ul >
                        <li><Link >Profilo</Link></li>
                        <li><Link >Notifiche</Link></li>
                        <li><Link to='/'>Esci</Link></li>
                     </ul>
                  </div>
               )}
            </div>
         </section>
      </>
   )
}

export default HeaderNavBar