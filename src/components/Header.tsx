import styled from "styled-components";
import wegotripLogo from "../assets/wegotripLogo.svg";

const Header = styled.div`
  height: 100px;
  background: #fafafa;
  align-items: center;
  display: flex;

  @media (max-width: 380px) {
    height: 60px;
  }
`;

const Logo = styled.img`
  width: 85px;
  height: 41px;

  @media (max-width: 380px) {
    width: 114px;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  margin: 0 32px 0 32px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  @media (max-width: 380px) {
    margin: 0 20px 0 20px;
  }
`;

export const ScreenHeader = () => {
  return (
    <Header>
      <ContainerHeader>
        <Logo src={wegotripLogo} />
      </ContainerHeader>
    </Header>
  );
};
