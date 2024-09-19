import Titulo from '../../componentes/Titulo'
import Paragrafo from '../../componentes/Paragrafo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}> Sobre mim </Titulo>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum fugiat
      sit temporibus at ea esse inventore veritatis itaque ipsam, dolore
      doloribus, unde dolor non accusamus nemo eos excepturi? At, saepe?
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=DeniseGrassi&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=DeniseGrassi&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
