import styled from "styled-components";
import { Button } from "../common/Button";
import { Graphics } from "./Graphics";

const ContainerLayout = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 32px;

  @media (max-width: 1630px) {
    margin-bottom: 100px;
    width: 70%;
  }

  @media (max-width: 890px) {
    width: auto;
  }
`;

const BlockName = styled.div`
  font-weight: 400;
  font-size: 24px;
  margin: 40px auto 16px 12px;

  @media (max-width: 890px) {
    font-size: 24px;
    line-height: 31px;
    margin: 40px auto 16px auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  text-align: center;
  gap: 67px;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 890px) {
    margin: 0 auto;
    gap: 15px;
  }

  @media (max-width: 680px) {
    gap: 5px;
  }
`;

export function ReportsContainer() {
  return (
    <ContainerLayout>
      <BlockName>Отчеты</BlockName>
      <ButtonContainer>
        <Button secondary buttonText="Сводка" />
        <Button buttonText="Продажи" />
        <Button buttonText="Установки" />
        <Button buttonText="Просмотры" />
        <Button buttonText="Выплаты" />
      </ButtonContainer>
      <Graphics />
    </ContainerLayout>
  );
}
