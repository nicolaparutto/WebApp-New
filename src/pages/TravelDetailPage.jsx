import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
//components
import SearchBar from '../components/SearchBar';
import ClientCard from '../components/ClientCard';

function TravelDetailPage() {

   const { id } = useParams();
   const { viaggi } = useGlobalContext();

   const viaggio = viaggi.find(viaggio => viaggio.id === parseInt(id));
   const [selectedTuristaId, setSelectedTuristaId] = useState(null);
   const [searchText, setSearchText] = useState("");

   const handleClick = (turistaId) => {
      setSelectedTuristaId(selectedTuristaId === turistaId ? null : turistaId);
   };

   const filteredTuristi = viaggio.listaTuristi.filter((turista) =>
      `${turista.nome} ${turista.cognome}`.toLowerCase().includes(searchText.toLowerCase())
   );

   const [open, setOpen] = useState(false);

   const accompFilter = viaggio.accompagnatori.map(accompagnatore => {
      return `${accompagnatore.nome} ${accompagnatore.cognome}`
   })

   return (
      <section className="travel-detail-section">
         <div>
            <h1>{viaggio.nome}</h1>
            <h6>{viaggio.dataInizio} - {viaggio.dataFine}</h6>
            <h6 className="mt-2">Accompagnatori: {accompFilter.join(", ")}.</h6>
            <div className="title-search">
               <h4>Lista dei partecipanti:</h4>
               <button className="search-button" onClick={() => { setOpen(!open) }}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div>
               {open && (
                  <div>
                     <SearchBar setSearchText={setSearchText} />
                  </div>
               )}
               <div className="row row-cols-1 row-cols-md-2">
                  {filteredTuristi.map((turista) => (
                     <ClientCard
                        key={turista.id}
                        turista={turista}
                        isVisible={selectedTuristaId === turista.id}
                        onClick={() => handleClick(turista.id)}
                     />
                  ))}
               </div>
            </div>
         </div>
         <div className='return-btn'>
            <Link to="/home"><i className="fa-solid fa-chevron-left"></i></Link>
         </div>
      </section>
   )
}

export default TravelDetailPage