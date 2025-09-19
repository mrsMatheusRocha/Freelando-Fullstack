import { Tipografia } from "../../componentes/Tipografia/Tipografia"

export default function CabecalhoCadastro({titulo, subtitulo, descricao}) {
    return (<div style={{ textAlign: 'center' }}>
        <Tipografia variante="h1" componente="h1">
            {titulo}
        </Tipografia>
        {subtitulo && <Tipografia variante="h3" componente="h2">
            {subtitulo}
        </Tipografia>}
        {descricao && <Tipografia variante="body" componente="body">
            {descricao}
        </Tipografia>}
    </div>)
}