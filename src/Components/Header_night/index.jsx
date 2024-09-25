import { Container } from "./styles";


export function Header_night({ $isNight }) {
  return (
    <Container $isNight={$isNight}>
      <a href="/">Home</a>
      <a href="/blog">Blog</a>
      
    </Container>
  );
}