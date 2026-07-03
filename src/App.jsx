import ContentBox from "./components/ContentBox";
import Cabecalho from "./components/Cabecalho";
import { FaSchool, FaBook, FaIdCard} from "react-icons/fa6";
import AnimatedWave from "./components/AnimatedWave";
import Info from "./components/Info";
function App() {
  return (
    <div>
      <Cabecalho/>
      <main className="container">
        <ContentBox title={"Sobre Mim"} icon={<AnimatedWave/>}>
          <p>Meu nome é Ryan Guimarães e sou Desenvolvedor com foco em React e Node.js. Tenho formação técnica e superior em andamento em Análise e Desenvolvimento de Sistemas, e uma base sólida em desenvolvimento web adquirida tanto em ambiente corporativo quanto em projetos pessoais.</p>
        </ContentBox>
        <ContentBox title={"Formação"} icon={<FaSchool/>}>
        <Info.List>
          <Info.Item grau="Técnico" instituicao="ETEC Joaquim Ferreira do Amaral" conclusao="12/2021" concluido/>
          <Info.Item grau="Superior" instituicao="Centro Universitário União das Américas Descomplica" conclusao="06/2027"/>
        </Info.List>
        </ContentBox>
        <ContentBox title={"Conhecimentos"} icon={<FaBook/>}>
          <ul className="grid content-table">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>ContextAPI</li>
            <li>Zustand</li>
            <li>Next.js</li>
            <li>JQuery</li>
            <li>TypeScript</li>
            <li>Bootstrap</li>
            <li>TailwindCSS</li>
            <li>DaisyUI</li>
            <li>MantineUI</li>
            <li>UI/UX</li>
            <li>PHP</li>
            <li>C#</li>
            <li>ASP.NET MVC</li>
            <li>Java</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
            <li>JWT</li>
            <li>OracleSQL</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </ContentBox>
        <ContentBox title={"Contato"} icon={<FaIdCard/>}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ullam nihil illo inventore, dolores veritatis nam sit cupiditate deserunt quod repudiandae nesciunt incidunt ab et obcaecati in animi quasi dolorem?
        </ContentBox>
      </main>
    </div>
  )
}

export default App
