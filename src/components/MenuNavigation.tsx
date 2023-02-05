import styled from "styled-components";
import profileAvatar from "../assets/profileAvatar.svg";
import { Button } from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { ROUTES } from "../const/routes";
import { COLORS } from "../const/colors";

const ContainerLayout = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: 0;
  border-right: 0.1px solid ${COLORS.BORDER_GRAY};

  @media (max-width: 1200px) {
    width: 30%;
  }

  @media (max-width: 890px) {
    z-index: 1;
    flex-direction: row;
    width: auto;
  }
`;

const Layout = styled.div`
  @media (max-width: 890px) {
    display: none;
  }
`;

const PhotoAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  margin-top: 48px;
  margin-bottom: 40px;
  cursor: pointer;

  @media (max-width: 890px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const StyleImg = styled.img`
  width: 83px;
  margin: 0 auto;

  @media (max-width: 890px) {
    width: 160px;
    height: 160px;
    object-fit: cover;
  }
`;

const TextName = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
`;

const TextRating = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: ${COLORS.SECONDARY_BLACK};
`;

export function MenuNavigation() {
  const navigate = useNavigate();

  const previousStep = useCallback(() => {
    navigate(ROUTES.profile);
  }, [navigate]);

  return (
    <ContainerLayout>
      <PhotoAndNameContainer onClick={previousStep}>
        <StyleImg src={profileAvatar} />
        <TextName>Борис веркс</TextName>
        <TextRating>Рейтинг 4.4</TextRating>
      </PhotoAndNameContainer>
      <Layout>
        <Button active buttonText="Отчеты" />
        <Button secondary buttonText="Туры" />
        <Button secondary buttonText="Отзывы" />
        <Button secondary buttonText="Справочный центр" />
        <Button secondary buttonText="Профиль и реквизиты" />
      </Layout>
    </ContainerLayout>
  );
}
