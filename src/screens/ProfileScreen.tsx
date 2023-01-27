import styled from "styled-components";
import { ScreenHeader } from "../components/Header";
import profileAvatar from "../assets/profileAvatar.svg";
import { Button } from "../common/Button";
import { TbHandClick } from "react-icons/tb";

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

export const ProfileScreen = () => {
  return (
    <ContainerLayout>
      <ScreenHeader />

      <ProfileContainer>
        <Form>
          <StyleImg src={profileAvatar} />
          <TextName>Борис веркс</TextName>
          <TextRating>Рейтинг 4.4</TextRating>
        </Form>

        <TextiInformation>
          Гарри Поттер (англ. Harry Potter) — главный герой одноименной серии
          книг, маг, Мальчик-который-выжил. Известен своим противостоянием с
          темным волшебником лордом Волдемортом, расправившимся с родителями
          Гарри и чуть не погибшим при попытке убить их годовалого малыша. После
          этого происшествия на лбу у Гарри остался шрам в виде молнии. Через 17
          лет Поттер сокрушил возродившегося Темного Лорда во время штурма
          магической школы Хогвартс.
        </TextiInformation>
        <Button icon={<TbHandClick />} buttonText={"Отчеты"} />
      </ProfileContainer>
    </ContainerLayout>
  );
};
