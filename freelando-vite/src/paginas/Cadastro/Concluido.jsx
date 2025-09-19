import { Link } from "react-router-dom";
import { Botao } from "../../componentes/Botao/Botao";
import conclusao from "./assets/cliente-concluido.png";
import styled from "@emotion/styled";
import { Col, Row } from "react-grid-system";
import { IconeSeta } from "../../componentes/Icones/IconeSeta";
import CabecalhoCadastro from "../../componentes/CabecalhoCadastro/CabecalhoCadastro";

const ImagemEstilizada = styled.img`
  max-width: 100%;
  border-radius: 16px;
`;

export default function Concluido() {
  return (
    <div style={{ textAlign: "center" }}>
      <CabecalhoCadastro
        titulo="Seu perfil está completo!"
        descricao="Agora é só começar a se conectar com os melhores freelancers do mercado!"
      />
      <figure>
        <ImagemEstilizada
          src={conclusao}
          alt="Mulher jovem de cabelos cacheados e óculos, sentada à frente de um computador com a mão apoiada no queixo e expressão sorridente."
        />
      </figure>
      <Row justify="center">
        <Col lg={6} md={6} sm={6} style={{ textAlign: "center" }}>
          <Link to="/cadastro">
            <Botao variante="secundaria" style={{ verticalAlign: "center" }}>
              <IconeSeta /> Voltar para a home
            </Botao>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
