import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
function TravelDetailPage() {

   const { id } = useParams();

   return (
      <section>
         <div>
            Pagina di dettaglio.
         </div>
         <div className='return-btn'>
            <Link to="/home"><i class="fa-solid fa-chevron-left"></i></Link>
         </div>
      </section>
   )
}

export default TravelDetailPage