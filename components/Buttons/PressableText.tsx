import React, { FC } from 'react'
import styled from 'styled-components/native';
import { colors } from "../Colors/Colors";
import SmallText from '../Texts/SmallText';
import { ButtonProps } from "./types";

const {primary} = colors;
const StyledPressable = styled.Pressable`
  align-self: center;
  padding-vertical: 5px;`


const PressableText: FC<ButtonProps> = (props) => {
    return (
        <StyledPressable style={props.style} onPress={props.onPress}>
            <SmallText style={{color:primary}}>{props.children}</SmallText>
        </StyledPressable>
    )
}

export default PressableText