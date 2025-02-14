import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [message, setMessage] = useState('');
   const navigate = useNavigate();

   const handleLogin = (e) => {
      e.preventDefault();
      if (email && password) {
         setMessage('');
         navigate('/home');
      } else if (!email && password) {
         setMessage('Inserisci email');
      } else if (email && !password) {
         setMessage('Inserisci password');
      } else {
         setMessage('Inserisci email e password');
      }
   };

   return (
      <section className="login-container">

         <form action="#" onSubmit={handleLogin}>
            <h1>Effettua il login</h1>
            <p className="err-message">{message}</p>
            <input
               className="form-input"
               type="email"
               placeholder="Inserisci Mail"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               className="form-input"
               type="password"
               placeholder="Inserisci Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" type="submit">Accedi</button>
         </form>
      </section>
   )
}

export default LoginPage