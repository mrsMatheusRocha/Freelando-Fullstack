import { Col, Container, Row } from "react-grid-system";
import { Botao } from "../componentes/Botao/Botao";
import { CampoTexto } from "../componentes/CampoTexto/CampoTexto";
import { Card } from "../componentes/Card/Card";
import { Estilos } from "../componentes/EstilosGlobais/Estilos";
import { ListaSupensa } from "../componentes/ListaSuspensa/ListaSuspensa";
import { ProvedorTema } from "../componentes/ProvedorTema/ProvedorTema";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { estadosBrasileiros } from "../data/estados";

const PaginaInicial = () => {
  return (
    <ProvedorTema>
      <Estilos />
      <Row justify="center">
        <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
          <Card>
            <Tipografia variante="h1" componente="h1">
              Freelando
            </Tipografia>
            <Tipografia variante="body" componente="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
            </Tipografia>
            <Row>
              <Col>
                <CampoTexto titulo="Nome Completo" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={4} sm={4}>
                <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} />
              </Col>
              <Col lg={8} md={8} sm={8}>
                <CampoTexto titulo="Cidade" />
              </Col>
            </Row>
            <Row>
              <Col>
                <CampoTexto titulo="E-mail" />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <CampoTexto titulo="Senha" />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <CampoTexto titulo="Repita a Senha" />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <Botao variante="secundaria">
                  Anterior
                </Botao>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                  <Botao>
                    Próxima
                  </Botao>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </ProvedorTema>
  );
}

export default PaginaInicial;
