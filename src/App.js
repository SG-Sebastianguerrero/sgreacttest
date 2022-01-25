import './App.css';
import React from 'react'


function logIn(){
  
  var usernameRequested = "sg";
  var passwordRequested = "sg";

  var usernameSubmited = document.getElementById("username").value;
  var passwordSubmited = document.getElementById("password").value;

  if(usernameRequested === usernameSubmited && passwordRequested === passwordSubmited){
    alert("sucess");
  }
  else{
    alert("Usuario o contraseña incorrectos")
  }
}

function App() {
  return (
    <div className="mainContainer">
      {/* fontasome cdn */}
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      {/* Bootstrap cdn */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      <img id="worldBackground" src="https://p4.wallpaperbetter.com/wallpaper/370/608/909/background-earth-continents-world-map-hd-wallpaper-preview.jpg" className="App-logo" alt="logo" />
      <div className="childContainer">
        <div className="form-group">
            <h2> analitycs</h2>
            <div className="fieldHelper">
              <i className="fas fa-user fa-lg"></i>
              <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder='Usuario'
                  id="username"
              />
            </div>
            <div className="fieldHelper">
              <i className="fas fa-lock-alt fa-lg"></i>          
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder='Contraseña'
                id= "password"
              />
            </div>
            <div className="fieldHelper">
              <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"></input>
              <label className="btn btn-outline-primary" htmlFor="btncheck2">✓</label>
              <h5 id="txtRemember">Recordar mis credenciales</h5>
            </div>
            <button type="button" className="btn btn-dark" onClick={()=> logIn()}>Iniciar Sesión</button>
          </div>
      </div>
    </div>
  );
}



export default App;
