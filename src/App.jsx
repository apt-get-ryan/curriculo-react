import ContentBox from "./components/ContentBox";
import Cabecalho from "./components/Cabecalho";
import { FaSchool, FaBook, FaIdCard} from "react-icons/fa6";
import AnimatedWave from "./components/AnimatedWave";
function App() {
  return (
    <div>
      <Cabecalho/>
      <main className="container">
        <ContentBox title={"Sobre Mim"} icon={<AnimatedWave/>}>
          <p>Meu nome é Ryan Guimarães e sou Desenvolvedor com foco em React e Node.js. Tenho formação técnica e superior em andamento em Análise e Desenvolvimento de Sistemas, e uma base sólida em desenvolvimento web adquirida tanto em ambiente corporativo quanto em projetos pessoais.</p>
        </ContentBox>
        <ContentBox title={"Formação"} icon={<FaSchool/>}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis facere doloribus ab, vero ipsam ex repellendus omnis ratione veniam commodi nihil quia atque totam accusantium quas delectus voluptate molestiae!
        </ContentBox>
        <ContentBox title={"Conhecimentos"} icon={<FaBook/>}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem ullam in dolores, error quibusdam temporibus enim iste atque earum? Iure quia nam qui a neque, aliquam repellendus quis harum.
        </ContentBox>
        <ContentBox title={"Contato"} icon={<FaIdCard/>}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ullam nihil illo inventore, dolores veritatis nam sit cupiditate deserunt quod repudiandae nesciunt incidunt ab et obcaecati in animi quasi dolorem?
        </ContentBox>
      </main>
    </div>
  )
}

export default App
