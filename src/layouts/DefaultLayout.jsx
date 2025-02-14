import { Outlet } from "react-router-dom";

//Components
import HeaderNavBar from "../components/HeaderNavBar";

function DefaultLayout() {
   return (
      <>
         <header>
            <HeaderNavBar />
         </header>

         <main>
            <Outlet />
         </main>

         <footer>

         </footer>
      </>
   )
}

export default DefaultLayout