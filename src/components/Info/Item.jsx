function Item({grau, instituicao, conclusao, concluido=false}) {
  return (
    <li>
      {grau} &#8212; {instituicao} | Conclusão: {conclusao} {!concluido && "(Previsto)"}
    </li>
  )
}
export {Item};