import React, { FC } from 'react'
import styled from 'styled-components/native';
import { colors } from "../colors/colors";
import { TextProps } from "./types";

const { primary } = colors;
const StyledText = styled.Text`
  font-size: 13px;
  color: ${primary};
  text-align: left;`


const SmallText: FC<TextProps> = (props) => {
    return (
        <StyledText style={props.style}>
            {props.children}
        </StyledText>
    )
}

export default SmallText