import React, { ReactElement, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { COLORS } from "../const/colors";
import "../index.css";

export interface ButtonProps {
  onClick?: () => void;
  activeClick?: () => boolean;
  style?: CSSProperties;
  className?: string;
  buttonText?: string;
  icon?: ReactElement;
  active?: boolean;
  secondary?: boolean;
}

const BaseButton = styled.button<{ secondary?: boolean; active?: boolean }>`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.BLACK};
  color: ${COLORS.BLACK};
  border: none;
  cursor: pointer;
`;

const SmallSpace = styled.div`
  margin-left: 8px;
`;

const IconButtonWithText = styled(BaseButton)<{
  secondary?: boolean;
  active?: boolean;
}>`
  justify-content: center;
  font-weight: 700;
  color: ${COLORS.WHITE};
  background: ${COLORS.BLACK};
`;

const TextButton = styled.div<{ secondary?: boolean; active?: boolean }>`
  display: flex;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  align-items: center;
  /* color: ${COLORS.BLACK}; */
  color: ${(props: any) =>
    props.secondary ? COLORS.SECONDARY_GRAY : COLORS.BLUE};

  text-decoration: underline
    ${(props: any) => (props.active ? COLORS.BLUE : "none")};
  /* border: none; */
  cursor: pointer;
  padding-left: 16px;
  background: ${(props: any) =>
    props.active ? COLORS.BUTTON_ACTIVE : COLORS.WHITE};

  @media (max-width: 890px) {
    font-size: 12px;
  }

  @media (max-width: 520px) {
    font-size: 10px;
  }

  @media (max-width: 440px) {
    font-size: 6px;
  }
`;

export const Button = (props: ButtonProps) => {
  const { className, onClick, buttonText, icon, style, active, secondary } =
    props;

  if (icon && buttonText) {
    return (
      <IconButtonWithText className={className} onClick={onClick} style={style}>
        {icon}
        <SmallSpace />
        {buttonText}
      </IconButtonWithText>
    );
  }

  return (
    <TextButton secondary={secondary} active={active} onClick={onClick}>
      {buttonText}
    </TextButton>
  );
};
