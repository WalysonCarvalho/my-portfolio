import { Container } from "./styles";
import { FaGithub } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
export function Footer_night({ $isNight }) {
  return (
    <Container $isNight={$isNight}>
      <a href="https://github.com/WalysonCarvalho" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://discord.gg/GX4fyGbp" target="_blank" rel="noopener noreferrer">
        <AiOutlineDiscord />
      </a>
      <a
        href="https://www.instagram.com/walysonmell0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </Container>
  );
}
