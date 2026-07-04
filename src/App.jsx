import ContentBox from "./components/ContentBox";
import Cabecalho from "./components/Cabecalho";
import { FaSchool, FaBook, FaIdCard, FaWhatsapp, FaLinkedin, FaGithub} from "react-icons/fa6";
import AnimatedWave from "./components/AnimatedWave";
import Info from "./components/Info";
import IconGmail from "./components/IconGmail";
function App() {
  return (
    <div>
      <Cabecalho/>
      <main className="container">
        <ContentBox title={"Sobre Mim"} icon={<AnimatedWave aria-hidden="true" focusable="false"/>}>
          <p>Meu nome é Ryan Guimarães e sou Desenvolvedor com foco em React e Node.js. Tenho formação técnica e superior em andamento em Análise e Desenvolvimento de Sistemas, e uma base sólida em desenvolvimento web adquirida tanto em ambiente corporativo quanto em projetos pessoais.</p>
        </ContentBox>
        <ContentBox title={"Formação"} icon={<FaSchool aria-hidden="true" focusable="false"/>}>
        <Info.List>
          <Info.Item grau="Técnico" instituicao="ETEC Joaquim Ferreira do Amaral" conclusao="12/2021" concluido/>
          <Info.Item grau="Superior" instituicao="Centro Universitário União das Américas Descomplica" conclusao="06/2027"/>
        </Info.List>
        </ContentBox>
        <ContentBox title={"Conhecimentos"} icon={<FaBook aria-hidden="true" focusable="false"/>}>
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
          <a className="contact-link color-whatsapp" target="_blank" href="https:\\wa.me/5514991314167">
            <FaWhatsapp aria-hidden="true" focusable="false" /><span>(14) 99131-4167</span>
          </a>
          <a className="contact-link color-gmail" target="_blank" href="mailto:ryan.guimar10@gmail.com">
            <IconGmail/><span>ryan.guimar10@gmail.com</span>
          </a>
          <a className="contact-link color-linkedin" target="_blank" href="https:\\www.linkedin.com/in/ryan-guimarães-94925824b">
            <FaLinkedin aria-hidden="true" focusable="false"/><span>Meu LinkedIn</span>
          </a>
          <a className="contact-link color-github" href="https://github.com/apt-get-ryan" target="_blank">
            <FaGithub aria-hidden="true" focusable="false"/><span>Meu GitHub</span>
          </a>
        </ContentBox>
      </main>
    </div>
  )
}

export default App
