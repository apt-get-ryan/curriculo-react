function Item({grau, instituicao, conclusao, concluido=false}) {
  return (
    <li>
      <h3 className="in-line">{grau} &#8212; {instituicao}</h3> | Conclusão: {conclusao} {!concluido && "(Previsto)"}
    </li>
  )
}
export {Item};