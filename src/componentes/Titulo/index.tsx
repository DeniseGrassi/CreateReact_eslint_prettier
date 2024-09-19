import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  textAlign?: string
}

const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize} textAlign={props.textAlign}>
    {props.children}
  </TituloEstilo>
)
export default Titulo
