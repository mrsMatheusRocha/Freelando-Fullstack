import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Link } from "../../componentes/Link/Link";
import { Link as RouterLink } from "react-router-dom";

import cliente from "./assets/cliente.png";
import freelancer from "./assets/freela.png";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";
import { useCadastroUsuarioContext } from "../../contexts/CadastroUsuario";

export default function SelecaoCliente() {
  const { setPerfil } = useCadastroUsuarioContext();
  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo="Seu perfil está completo!"
        subtitulo="Como podemos te ajudar?"
      />
      <Row>
        <Col md={6} sm={12}>
          <RouterLink to="interesses" onClick={() => setPerfil('cliente')}>
            <img src={cliente} alt="Imagem de um cliente" />
            <Tipografia variante="body" componente="body">
              Sou cliente e preciso de um freela!
            </Tipografia>
          </RouterLink>
        </Col>
        <Col md={6} sm={12}>
          <RouterLink to="interesses" onClick={() => setPerfil('freela')}>
            <img src={freelancer} alt="Imagem de um freelancer" />
            <Tipografia variante="body" componente="body">
              Sou freela e preciso de clientes!
            </Tipografia>
          </RouterLink>
        </Col>
      </Row>
      <div>
        <Tipografia variante="body2" componente="body2">
          Já tem conta?
        </Tipografia>
        <p>
          <Link variante="secundaria">Faça login!</Link>
        </p>
      </div>
    </div>
  );
}
