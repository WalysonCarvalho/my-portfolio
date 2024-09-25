import { useState } from "react";
import { Header_night } from "../../Components/Header_night";
import { Main_night } from "../../Components/Main_night";
import { Footer_night } from "../../Components/Footer_night";
import { Container } from "./styles"; // Certifique-se de que este está correto
import GlobalStyles from "../../styles/global"; // Importa a exportação padrão
import { FaSun } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { Button } from "./styles";

export function Home_night() {
  const [isNight, setIsNight] = useState(true); // Estado para controlar o tema

  // Função para alternar o modo
  const toggleTheme = () => {
    setIsNight(!isNight);
  };

  return (
    <>
      <GlobalStyles isNight={isNight} /> {/* Aplica os estilos globais */}
      <Button onClick={toggleTheme}>
        {isNight ? <FaSun /> : <FaRegMoon />}
      </Button>
      <Container $isNight={isNight}>
        <Header_night $isNight={isNight} />
        <Main_night $isNight={isNight} />
        <Footer_night $isNight={isNight} />
      </Container>
    </>
  );
}
