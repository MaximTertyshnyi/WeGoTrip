import styled from "styled-components";
import ResponsiveAppBar from "../components/Header";
import { MenuNavigation } from "../components/MenuNavigation";
import { ReportsContainer } from "../components/ReportsContainer";

const ContainerLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;

  @media (max-width: 890px) {
    flex-direction: column;
  }
`;

export function ReportsScreen() {
  return (
    <ContainerLayout>
      <ResponsiveAppBar />
      <Container>
        <MenuNavigation />
        <ReportsContainer />
      </Container>
    </ContainerLayout>
  );
}
