import { Col, Container, Row } from "react-grid-system";
import { NavLink, Outlet } from "react-router-dom";

import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import { Tipografia } from "../componentes/Tipografia/Tipografia";
import { Rodape } from "../componentes/Rodape/Rodape";
import { ListaInline } from "../componentes/Lista/ListaInline";
import { ItemListaInline } from "../componentes/Lista/ItemListaInline";
import { IconeWhatsApp } from "../componentes/Icones/IconeWhatsApp";
import { IconeTwitter } from "../componentes/Icones/IconeTwitter";
import { IconeTwitch } from "../componentes/Icones/IconeTwitch";
import { IconeInstagram } from "../componentes/Icones/IconeInstagram";
import { FreelandoLogo } from "../componentes/Icones/FreelandoLogo";
import { Link } from "../componentes/Link/Link";
import { ArmazenadorToken } from "../utils/ArmazenadorToken";
import { useSessaoUsuarioContext } from "../contexts/SessaoUsuario"

export default function LayoutBase({ children }) {
  const { usuarioEstaLogado, logout } = useSessaoUsuarioContext()

  return (
    <>
      <Cabecalho>
        <Container>
          <Row align="center">
            <Col>
              <NavLink to="/">
                <FreelandoLogo />
              </NavLink>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <NavLink to="/login">
                <Link>Login</Link>
              </NavLink>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Link
                onClick={() => {
                  ArmazenadorToken.efetuarLogout();
                }}
              >
                Logout
              </Link>
              {usuarioEstaLogado ? (
                <Link onClick={logout}>Logout</Link>
              ) : (
                <RouterLink to="/login">
                  <Link>Login</Link>
                </RouterLink>
              )}
            </Col>
          </Row>
        </Container>
      </Cabecalho>
      <Container>
        <Outlet />
        {children}
      </Container>
      <Rodape>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Tipografia variante="legenda" componente="legenda">
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
              </Tipografia>
            </Col>
            <Col style={{ textAlign: "right" }}>
              <Tipografia variante="legenda" componente="legenda">
                Acesse nossas redes:
              </Tipografia>
              <ListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconeWhatsApp />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconeTwitch />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconeInstagram />
                  </a>
                </ItemListaInline>
                <ItemListaInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconeTwitter />
                  </a>
                </ItemListaInline>
              </ListaInline>
            </Col>
          </Row>
        </Container>
      </Rodape>
    </>
  );
}
