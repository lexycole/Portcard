import React, {FC} from 'react'
import styled from 'styled-components/native';
import {colors} from "../Colors/Colors";
import {ContainerProps} from "./types";


const {primary} = colors;
const StyledView = styled.View`
    flex:1;
    padding: 10px;
    background-color: ${primary};`


const MainContainer: FC<ContainerProps> = ({children, style}) => {
    return (
        <StyledView style={style}>
            {children}
        </StyledView>
    )
}

export default MainContainer;