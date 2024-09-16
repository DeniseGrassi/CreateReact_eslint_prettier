type Props = {
  children: string
}

const Titulo = (props: Props) => <span>{props.children}</span>

export default Titulo

// import styled from 'styled-components'

// type BotaoProps = {				//tipagem
//   principal: boolean				//essa eh obrigatoria
//   fontSize?: string				//essa eh opcional, se não especificar nada, entra o 16px!
// }

// const Botao = styled.button<BotaoProps>`
//   background-color: ${(props) => (props.principal ? 'green' : 'blue')};
//   font-size: ${(props) => props.fontSize || '16px'};
// `	//primeiro tenta pegar o valor de props.fontSize, se ele for indefinido, pega o 16px, q é p CALLBACK
// 	//por isso colocamos o ? na tipagem, pra não ser obrigatório colocar, se não for colocado, então é 16px.

// const BotaoPerigo = styled(Botao)`
//   background-color: red;			//aqui especificou uma cor, tornando ela prioridade!
//   color: #fff;
//   span {				//aqui a gente pode estilizar elementos, dentro de outros elementos
//     text-decoration: line-through;
//   }
// `
// function Teste() {
//   return (
//     <>
//       <Botao principal> Clique aqui </Botao>			//não tem nada, logo será a fontSize será 16px
//       <Botao principal={false} fontSize="14px">		//cor do botão será azul.
//         Cancelar
//       </Botao>

//    <BotaoPerigo principal as="a"> 	// o atributo AS=="tag do html", no caso, a = link
//    <span> Não clique aqui </span>
//    </BotaoPerigo>
// //a cor do botão so não vai ser verde pq houve uma priorização na const de que fosse vermelho!
//     </>
//   )
// }
// export default Teste
