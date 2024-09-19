import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: #282a35;
  margin-bottom: 15px;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  text-align: ${({ textAlign }) => textAlign || 'left'};
`
