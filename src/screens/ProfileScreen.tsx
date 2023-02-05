import styled from "styled-components";
import ResponsiveAppBar from "../components/Header";
import profileAvatar from "../assets/profileAvatar.svg";
import { Button } from "../common/Button";
import { TbHandClick } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { ROUTES } from "../const/routes";
import { COLORS } from "../const/colors";

const ContainerLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  text-align: center;
  margin: 100px auto 0 auto;
`;

const PhotoAndNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`;

const StyleImg = styled.img`
  width: 220px;
  margin: 0 auto;
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

const TextiInformation = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  margin: 50px 0;
`;

export const ProfileScreen = () => {
  const navigate = useNavigate();

  const completeStep = useCallback(() => {
    navigate(ROUTES.reports);
  }, [navigate]);

  return (
    <ContainerLayout>
      <ResponsiveAppBar />

      <ProfileContainer>
        <PhotoAndNameContainer>
          <StyleImg src={profileAvatar} />
          <TextName>Борис веркс</TextName>
          <TextRating>Рейтинг 4.4</TextRating>
        </PhotoAndNameContainer>

        <TextiInformation>
          Гарри Поттер (англ. Harry Potter) — главный герой одноименной серии
          книг, маг, Мальчик-который-выжил. Известен своим противостоянием с
          темным волшебником лордом Волдемортом, расправившимся с родителями
          Гарри и чуть не погибшим при попытке убить их годовалого малыша. После
          этого происшествия на лбу у Гарри остался шрам в виде молнии. Через 17
          лет Поттер сокрушил возродившегося Темного Лорда во время штурма
          магической школы Хогвартс.
        </TextiInformation>
        <Button
          onClick={completeStep}
          icon={<TbHandClick />}
          buttonText="Отчеты"
        />
      </ProfileContainer>
    </ContainerLayout>
  );
};
