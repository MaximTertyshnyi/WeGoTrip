import React, { ReactElement, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import "../index.css";

export interface ButtonProps {
  onClick?: () => void;
  activeClick?: () => boolean;
  buttonStyle?: CSSProperties;
  style?: CSSProperties;
  className?: string;
  buttonText?: string;
  icon?: ReactElement;
  isIconWithText?: boolean;
  children?: any;
  color?: string;
  active?: boolean;
}

const BaseButton = styled.button`
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

const IconButtonWithText = styled(BaseButton)`
  justify-content: center;
  font-weight: 700;
  color: white;
  background: black;
`;

const TextButton = styled.div`
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
  background: white;

  /* &:active {
    background: rgba(0, 125, 255, 0.08);
  } */
`;

export const Button = (props: ButtonProps) => {
  const { className, onClick, buttonText, icon, style } = props;
  //   const firstColor = "white";
  //   const [color, setColor] = useState("");

  //   const handleClick = (color: string) => {
  //     if (color === firstColor) {
  //       return setColor("rgba(0, 125, 255, 0.08)");
  //     }
  //     if (color !== firstColor) {
  //       setColor("white");
  //     }
  //   };

  if (icon && buttonText) {
    return (
      <IconButtonWithText onClick={onClick} style={style}>
        {icon}
        <SmallSpace />
        {buttonText}
      </IconButtonWithText>
    );
  }

  return <TextButton onClick={onClick}>{buttonText}</TextButton>;
};
