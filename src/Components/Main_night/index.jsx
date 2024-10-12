import { Container } from "./styles";
import myImg from "../../assets/1707438320943.jpg";
import { CiLinkedin } from "react-icons/ci";

export function Main_night({ $isNight }) {
  return (
    <Container $isNight={$isNight}>
      <img src={myImg} alt="Walyson Carvalho - Desenvolvedor Front-end" />
      <h1>Walyson Carvalho</h1>
      <p>Desenvolvedor Web</p>
      <p>
        😍 Apaixonado por resolver problemas e encontrar soluções criativas.
      </p>
      <p>
        ⭐️ Transformando desafios em oportunidades no mundo da programação.
      </p>
      <p>
        💡Me conheça melhor!{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/walyson-carvalho"
        >
          <CiLinkedin />
        </a>
      </p>

      <a target="_blank" rel="noopener noreferrer" href="https://github.com/WalysonCarvalho">
        <h1>Projetos Autorais</h1>
        <p>Aperfeiçoando meus estudos </p>
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://github.com/WalysonCarvalho">
        <h1>Todos meus Projetos</h1>
        <p>Aperfeiçoando meus estudos</p>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://zesty-beijinho-c132fe.netlify.app/">
        <h1>Quiz JavaScript</h1>
        <p>Testes seus conhecimentos em JavaScript</p>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/GX4fyGbp">
        <h1>Gostou?</h1>
        <p>Me chama no Discord e vamos nos ajudar! </p>
      </a>
    </Container>
  );
}
