import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {setEmail(event.target.value)};
  const handPasswordChange = (event) => {setPassword(event.target.value)};

  const handleForSubmit = (event) =>{
    event.preventDefault();
    alert(`Usuario: ${email} Contraseña: ${password}`);
  };

  return (
    <div className='App'>
      <form onSubmit={(handleForSubmit)}>
        <div>
          <h2>Iniciar sesión</h2>
          <label>
            Correo
            <input type='email' value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Contraseña
            <input type='Contraseña' value={password} onChange={handPasswordChange} />
          </label>
          <button type='submit'>
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
