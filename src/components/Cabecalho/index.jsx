
function Cabecalho() {
  return (
    <header className="bg-2 margin-b-10">
      <div className="container flex gap-10 items-center justify-content-between p-x-8">
        <div className="flex gap-10 items-center">
          <div className="radius overflow-hidden">
            <img className="select-none" src="/ryan.jpg" height={60} alt="Foto minha com sorriso simpático, praça com árvores ao fundo" draggable="false"/>
          </div>
          <h1>Ryan Guimarães</h1>
        </div>
        <span>Cargo desejado: Estagiário TI</span>
      </div>
    </header>
  )
}

export default Cabecalho