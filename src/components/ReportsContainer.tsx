import styled from "styled-components";
import { ScreenHeader } from "../components/Header";
import profileAvatar from "../assets/profileAvatar.svg";
import { Button } from "../common/Button";
import { TbHandClick } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContainerLayout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 32px;
`;

const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  /* margin: 100px auto 0 auto; */
`;

const GraphContainer = styled.div`
  display: flex;
  text-align: center;
  /* margin: 100px auto 0 auto; */
`;

const ButtonNavigation = styled(Button)`
  width: 133px;
  display: flex;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  align-items: center;
  color: rgba(0, 0, 0, 0.87);
  border: none;
  cursor: pointer;
  padding-left: 16px;
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

const StyleImg = styled.img`
  width: 83px;
  margin: 0 auto;

  @media (max-width: 380px) {
    width: 360px;
    height: 360px;
    object-fit: cover;
  }
`;

const BlockName = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin: 40px auto 16px 32px;

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

export function ReportsContainer() {
  return (
    <ContainerLayout>
      <BlockName>Отчеты</BlockName>
      <ButtonContainer>
        <Button style={{ width: 133 }} buttonText={"Отчеты"} />
        <Button buttonText={"Туры"} />
        <Button buttonText={"Отзывы"} />
        <Button buttonText={"Справочный центр"} />
        <Button buttonText={"Профиль и реквизиты"} />
      </ButtonContainer>
      <GraphContainer></GraphContainer>
    </ContainerLayout>
  );
}
