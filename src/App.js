import React from "react";
//import logo from './logo.svg';
//import './App.css';

function App() {
  const mystyle = {
    color: 'black',
    backgroundColor: ''
  }
  return (
    <div className="container">
      <h1 style={mystyle}>Validando Formularios con React y Formik</h1>
      <form>
        <div class="col-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input 
          type="text" 
          className="form-control" 
          id="name"
          name="name" />
          </div>
          <div class="col-3">
          <label htmlFor="email" className="form-label">Correo Electronico</label>
          <input 
          type="email" 
          className="form-control" 
          id="email" 
          name="email"/>
          </div>
          <div class="col-3">
          <label htmlFor="email" className="form-label">Telefono</label>
          <input 
          type="text" 
          className="form-control" 
          id="phone" 
          name="phone"/>
          </div>
          <div class="col-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          name="password"/>
          </div>
          <div class="col-2">
        <button type="submit" class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
