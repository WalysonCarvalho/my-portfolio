import { Container } from "./styles";


export function Header_night({ $isNight }) {
  return (
    <Container $isNight={$isNight}>
      <a href="/">Home</a>
      <a href="https://www.instagram.com/walysoncarvalho.dev/">Blog</a>
      
    </Container>
  );
}