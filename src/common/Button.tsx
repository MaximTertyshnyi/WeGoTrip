import React, { ReactElement } from "react";
import styled, { CSSProperties } from "styled-components";

export interface ButtonProps {
  onClick?: () => void;
  buttonStyle?: CSSProperties;
  style?: CSSProperties;
  buttonText?: string;
  icon?: ReactElement;
  isIconWithText?: boolean;
  children?: any;
}

const BaseButton = styled.button<{ secondary?: boolean; danger?: boolean }>`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
`;

const SmallSpace = styled.div`
  margin-left: 8px;
`;

const IconButtonWithText = styled(BaseButton)<{
  danger?: boolean;
  disabled?: boolean;
}>`
  justify-content: center;
  font-weight: 700;
  color: white;
  background: black;
`;

export const Button = (props: ButtonProps) => {
  const { onClick, buttonText, icon, style } = props;

  return (
    <IconButtonWithText onClick={onClick} style={style}>
      {icon}
      <SmallSpace />
      {buttonText}
    </IconButtonWithText>
  );
};
