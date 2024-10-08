import Avatar from '../../componentes/Avatar'
import Paragrafo from '../../componentes/Paragrafo'
import Titulo from '../../componentes/Titulo'

import { Descricao, BotaoSidebar, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20} textAlign="center">
        Denise Grassi
      </Titulo>
      <Paragrafo fontSize={16} textAlign="center" tipo="secundario">
        denisegrassi
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12} textAlign="center">
        Engenheiro FullStack
      </Descricao>
      <BotaoSidebar onClick={props.trocaTema}>Trocar tema</BotaoSidebar>
    </SidebarContainer>
  </aside>
)

export default Sidebar
