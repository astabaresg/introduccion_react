//import { Funciones } from "./typescript/Funciones";
//import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
//import { TiposBasicos } from "./typescript/TiposBasicos";

import { Formularios } from "./components/Formularios";
import { Usuarios } from "./components/Usuarios";

//import { ContadorConHook } from "./components/ContadorConHook";
//import { Login } from "./components/Login";

//import { Contador } from "./components/Contador";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Introducción a TS - React</h1>
      <hr />
      {/* <TiposBasicos/> */}
      {/* <ObjetosLiterales/> */}
      {/* <Funciones/> */}
      {/* <Contador/> */}
      {/* <ContadorConHook/> */}
      {/* <Login/> */}
      {/* <Usuarios/> */}
      <Formularios/>

    </div>
  )
}
export default App;
