import React, { useState } from 'react';
import './App.css';
import heart from "./descarga.png";

function App() {

  const [estaSonando, setEstaSonando] = useState("");//variable que me va a decir qué nota está sonando

  const notas = [
    {
      nombre: "Do",
      link: require("./notas/do.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Re",
      link: require("./notas/re.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Mi",
      link: require("./notas/mi.wav"),
    },
    {
      nombre: "Fa",
      link: require("./notas/fa.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Sol",
      link: require("./notas/sol.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "La",
      link: require("./notas/la.wav"),
      tieneSostenido: true,
    },
    {
      nombre: "Si",
      link: require("./notas/si.wav"),
    },

  ]

  const handleClick = (nota) => {

    //console.log(nota);
    setEstaSonando(nota.nombre);//cuando haga clic vamos a reemplazar la variable por el nombre de la nota
    const sonido = new Audio(nota.link);
    sonido.play();

    setTimeout(() => { setEstaSonando("") }, 300)

    console.log(estaSonando);
  }

  return (
    <div className="App">

      <div className="titulo">
        <h1>Piano con React</h1>
        <h2>Hecho con amor <img src={heart} alt="imagen corazón" className="corazon"></img> por Malala</h2>
        {estaSonando && <h3>Está sonando la nota {estaSonando}</h3>}
      </div>

      <div className="contenedor">
        {
          notas.map(nota => {
            return (
              <div
                className={`nota ${estaSonando === nota.nombre && 'estaSonando'}`}
                onClick={() => handleClick(nota)}>
                {nota.tieneSostenido && <div className="negra"></div>}
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
