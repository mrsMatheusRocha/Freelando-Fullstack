import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/Cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/Cadastro/LayoutBaseCadastro";
import LayoutBase from "../paginas/LayoutBase";
import Interesses from "../paginas/Cadastro/Interesses";
import DadosPessoais from "../paginas/Cadastro/DadosPessoais";
import Concluido from "../paginas/Cadastro/Concluido";
import Pagina404 from "../paginas/Erros/Pagina404";
import Login from "../paginas/Login/Login";
import PaginaInicial from "../paginas/PaginaInicial";
import Perfil from "../paginas/Perfil/Perfil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    ErrorBoundary: Pagina404,
    children: [
      {
        path: "",
        element: <PaginaInicial />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "cadastro",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />,
          },
          {
            path: "interesses",
            element: <Interesses />,
          },
          {
            path: "dados-pessoais",
            element: <DadosPessoais />,
          },
          {
            path: "concluido",
            element: <Concluido />,
          },
        ],
      },
      {
        path: "area-logada",
        children: [
          {
            path: "perfil",
            element: <Perfil />,
          },
        ],
      },
    ],
  },
]);
