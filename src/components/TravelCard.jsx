import { Link } from "react-router-dom"

function TravelCard({ viaggio }) {

   const { dataInizio, dataFine, id, nome, immagine, accompagnatori } = viaggio;

   // Funzione per calcolare i giorni di viaggio
   const calcolaGiorni = (dataInizio, dataFine) => {
      if (!dataInizio || !dataFine) return 'Data non valida';
      const inizio = new Date(dataInizio.split("/").reverse().join("-"));
      const fine = new Date(dataFine.split("/").reverse().join("-"));
      const differenzaInMs = fine - inizio;
      const giorni = differenzaInMs / (1000 * 60 * 60 * 24);
      return giorni + 1; // Aggiunge 1 per includere sia il giorno di inizio che quello di fine
   };

   // Funzione per estrarre l'anno dalla data
   const estraiAnno = (data) => {
      return data.split("/")[2];
   };

   // Funzione per riformattare la data in formato dd/mm
   const formattaData = (data) => {
      const [giorno, mese] = data.split("/");
      return `${giorno}/${mese}`;
   };

   return (
      <div className="travel-card">
         <Link to={`/travel-detail/${id}`}>
            <div className="travel-card-content">
               <div className="content-text">
                  <div>
                     <h3>{nome}</h3>
                     <h5>{estraiAnno(dataInizio)}</h5>
                     <span>
                        {formattaData(dataInizio)} - {formattaData(dataFine)} | {calcolaGiorni(dataInizio, dataFine)} giorni
                     </span>
                  </div>

               </div>
               <div className="content-img">
                  <img src={immagine} alt={nome} />
               </div>
            </div>
         </Link>
      </div >
   )
}

export default TravelCard