import ContentBox from "./components/ContentBox";
import Cabecalho from "./components/Cabecalho";
function App() {

  return (
    <div>
      <Cabecalho/>
      <main className="container">
        <ContentBox title={"Sobre Mim"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, obcaecati asperiores dolor pariatur doloribus magni. Sapiente, possimus beatae quam accusantium architecto recusandae distinctio officiis dolore in velit ratione fugiat maxime!
        </ContentBox>
        <ContentBox title={"Formação"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis facere doloribus ab, vero ipsam ex repellendus omnis ratione veniam commodi nihil quia atque totam accusantium quas delectus voluptate molestiae!
        </ContentBox>
        <ContentBox title={"Conhecimentos"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ullam in dolores, error quibusdam temporibus enim iste atque earum? Iure quia nam qui a neque, aliquam repellendus quis harum.
        </ContentBox>
        <ContentBox title={"Contato"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ullam nihil illo inventore, dolores veritatis nam sit cupiditate deserunt quod repudiandae nesciunt incidunt ab et obcaecati in animi quasi dolorem?
        </ContentBox>
      </main>
    </div>
  )
}

export default App
