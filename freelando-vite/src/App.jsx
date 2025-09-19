import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { SessaoUsuarioProvider } from "./contexts/SessaoUsuario";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <SessaoUsuarioProvider>
        <RouterProvider router={router} />
      </SessaoUsuarioProvider>
    </ProvedorTema>
  );
}

export default App;
