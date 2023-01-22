import React, {FC} from 'react'
import styled from 'styled-components/native';
import {ContainerProps} from "./types";

const StyledView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;`


const RowContainer: FC<ContainerProps> = ({children, style}) => {
    return (
        <StyledView style={style}>
            {children}
        </StyledView>
    )
}

export default RowContainer;