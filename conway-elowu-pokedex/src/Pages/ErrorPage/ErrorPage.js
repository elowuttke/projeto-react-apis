import { Header } from "../../Components/Header/Header";
import { Container, TitlePage } from "./errorPageStyle";

export function ErrorPage() {
  return (
    <Container>
      <Header />
      <TitlePage>Oh, no! Aconteceu algo de errado.</TitlePage>
    </Container>
  );
}
