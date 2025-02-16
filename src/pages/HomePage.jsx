import { useGlobalContext } from "../context/GlobalContext";

//Components
import TravelCard from "../components/TravelCard"

function HomePage() {

   // Funzione per convertire una data nel formato dd/MM/yyyy
   const parseDate = (dateStr) => {
      const [day, month, year] = dateStr.split('/');
      return new Date(`${year}-${month}-${day}`);
   };

   const { viaggi } = useGlobalContext();
   const currentDate = new Date();

   // funzione viaggio in corso
   const isOngoing = (startDate, endDate) => {
      const start = parseDate(startDate);
      const end = parseDate(endDate);
      return currentDate >= start && currentDate <= end;
   };

   // funzione viaggio passato
   const isUpcoming = (startDate) => {
      const start = parseDate(startDate);
      return currentDate <= start;
   };

   const ongoingTrip = viaggi.find(viaggio => isOngoing(viaggio.dataInizio, viaggio.dataFine));
   const scheduledTrips = viaggi.filter(viaggio => isUpcoming(viaggio.dataInizio) && !isOngoing(viaggio.dataInizio, viaggio.dataFine));

   return (
      <section className="home-section">
         <h2>Lista Viaggi</h2>

         <div className="travels-list">
            <h4>In corso:</h4>
            {ongoingTrip && (
               <div className="my-5">
                  <TravelCard key={ongoingTrip.id} viaggio={ongoingTrip} />
               </div>
            )}
         </div>

         <div className="travels-list">
            <h4>Viaggi Programmati:</h4>
            {scheduledTrips.map(viaggio => (
               <TravelCard key={viaggio.id} viaggio={viaggio} />
            ))}
         </div>
      </section>
   )
}

export default HomePage