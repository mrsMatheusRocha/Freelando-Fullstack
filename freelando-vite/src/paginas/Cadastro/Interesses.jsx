import GrupoRadio from "../../componentes/Radio/GrupoRadio";
import { Botao } from "../../componentes/Botao/Botao";
import { Col, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";
import {useCadastroUsuarioContext} from "../../contexts/CadastroUsuario";
import { useEffect } from "react";

const opcoes = [
  {
    valor: 1,
    label: "TI e Programação",
  },
  {
    valor: 2,
    label: "Design e Multimídia",
  },
  {
    valor: 3,
    label: "Revisão",
  },
  {
    valor: 4,
    label: "Tradução",
  },
  {
    valor: 5,
    label: "Transcrição",
  },
  {
    valor: 6,
    label: "Marketing",
  },
];

export default function Interesses() {
  const navegar = useNavigate();
  const { usuario, setInteresse, possoSelecionarInteresse } = useCadastroUsuarioContext();

  useEffect(() => {
    if (!possoSelecionarInteresse()) {
      navegar("/cadastro");
    }
  }, [navegar, possoSelecionarInteresse]);

  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo="Crie seu cadastro"
        subtitulo="Qual sua área de interesse?"
      />
      <GrupoRadio
        opcoes={opcoes}
        valor={usuario.interesse}
        onChange={setInteresse}
      />
      <Row>
        <Col lg={6} md={6} sm={6}>
          <Link to="..">
            <Botao variante="secundaria">Anterior</Botao>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div style={{ textAlign: "right" }}>
            <Link to="/cadastro/dados-pessoais">
              <Botao>Próxima</Botao>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}
