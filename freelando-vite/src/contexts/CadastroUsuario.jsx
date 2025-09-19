import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

const usuarioInicial = {
  perfil: "",
  interesse: "",
  nomeCompleto: "",
  uf: "",
  cidade: "",
  email: "",
  senha: "",
  senhaConfirmada: "",
};

const CadastroUsuarioContext = createContext({
  usuario: usuarioInicial,
  setPerfil: () => null,
  setInteresse: () => null,
  setNomeCompleto: () => null,
  setUf: () => null,
  setCidade: () => null,
  setEmail: () => null,
  setSenha: () => null,
  setsenhaConfirmada: () => null,
  submeterUsuario: () => null,
  possoSelecionarInteresse: () => null,
});

export function CadastroUsuarioProvider({ children }) {
  const navegar = useNavigate();
  const [usuario, setUsuario] = useState(usuarioInicial);

  function setPerfil(perfil) {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        perfil,
      };
    });
  }

  const setInteresse = (interesse) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        interesse,
      };
    });
  };

  const setNomeCompleto = (nomeCompleto) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        nomeCompleto,
      };
    });
  };

  const setUf = (uf) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        uf,
      };
    });
  };

  const setCidade = (cidade) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        cidade,
      };
    });
  };

  const setEmail = (email) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        email,
      };
    });
  };

  const setSenha = (senha) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        senha,
      };
    });
  };

  const setSenhaConfirmada = (senhaConfirmada) => {
    setUsuario((estadoAnterior) => {
      return {
        ...estadoAnterior,
        senhaConfirmada,
      };
    });
  };

  const submeterUsuario = () => {
    http.post('auth/register', usuario)
      .then(() => {
        navegar('/cadastro/concluido');
      })
      .catch(erro => {
        console.error(erro);
      })
  };

  const possoSelecionarInteresse = () => {
    return !!usuario.perfil;
  };

  const contexto = {
    usuario,
    setPerfil,
    setInteresse,
    setNomeCompleto,
    setUf,
    setCidade,
    setEmail,
    setSenha,
    setSenhaConfirmada,
    submeterUsuario,
    possoSelecionarInteresse,
  };
  return (
    <CadastroUsuarioContext.Provider value={contexto}>
      {children}
    </CadastroUsuarioContext.Provider>
  );
}

export const useCadastroUsuarioContext = () => {
  return useContext(CadastroUsuarioContext);
};
