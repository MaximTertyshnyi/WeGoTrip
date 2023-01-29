import styled from "styled-components";
import { ScreenHeader } from "../components/Header";
import profileAvatar from "../assets/profileAvatar.svg";
import { Button } from "../common/Button";
import { TbHandClick } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContainerLayout = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin: 0;
  border-right: 0.1px solid #e5e5e5;
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
  margin-top: 48px;
  margin-bottom: 40px;
`;

const StyleImg = styled.img`
  width: 83px;
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

export function MenuNavigation() {
  const [btnState, setbtnState] = useState(false);
  const navigate = useNavigate();

  const completeFormStep = () => {
    setbtnState((btnState) => !btnState);
    // navigate("/profilescreen");
  };

  let toggleClassCheck = btnState ? " active " : "";

  return (
    <ContainerLayout>
      <Form>
        <StyleImg src={profileAvatar} />
        <TextName>Борис веркс</TextName>
        <TextRating>Рейтинг 4.4</TextRating>
      </Form>

      <Button
        className={toggleClassCheck}
        onClick={completeFormStep}
        buttonText={"Отчеты"}
      />
      <Button buttonText={"Туры"} />
      <Button buttonText={"Отзывы"} />
      <Button buttonText={"Справочный центр"} />
      <Button buttonText={"Профиль и реквизиты"} />
    </ContainerLayout>
  );
}
