import styled from "styled-components";
import { ScreenHeader } from "../components/Header";
import profileAvatar from "../assets/profileAvatar.svg";
import { Button } from "../common/Button";
import { TbHandClick } from "react-icons/tb";
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
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const StyleImg = styled.img`
  width: 220px;
  margin: 0 auto;

  @media (max-width: 380px) {
    width: 360px;
    height: 360px;
    object-fit: cover;
  }
`;

const TextName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  @media (max-width: 380px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

const TextRating = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.54);

  @media (max-width: 380px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

const TextiInformation = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 50px 0;

  @media (max-width: 380px) {
    font-size: 24px;
    line-height: 31px;
  }
`;

export function ReportsScreen() {
  return (
    <ContainerLayout>
      <ScreenHeader />
      <Container>
        <MenuNavigation />
        <ReportsContainer />
      </Container>
    </ContainerLayout>
  );
}
