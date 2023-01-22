import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {FC, useState} from 'react'
import styled from 'styled-components/native';
import {colors} from "../colors/colors";
import { InputProps  } from "./types";

    const { secondaryText, primary, containerText } = colors;
    const InputWrapper = styled.View`
        width:100%`;


    const InputField = styled.TextInput`
        background-color: ${containerText};
        height: 52px;
        border-width: 1px;
        border-radius: 16px;
        border-color: ${primary};
        margin-vertical: 3px;
        margin-bottom: 10px;
        padding:16px 24px 16px 24px;
        // padding-left: 65px;
        font-size: 16px;
        color: #ffffff;
    `;
    const RightIcon = styled.TouchableOpacity`
        position: absolute;
        top: 15px;
        right: 24px;
        color: #fff;
        z-index: 1;`;


    const WalletPasswordTextInput: FC<InputProps> = ({isPassword, style,icon,label, ...props}) => {
        const [inputBackgroundColor, setInputBackgroundColor ] = useState(containerText);
        const [hidePassword, setHidePassword] = useState(true);

        const customOnFocus = () => {
            props?.onFocus;
            setInputBackgroundColor(containerText);
        }
        const customOnBlur = () => {
           props?.onBlur;
           setInputBackgroundColor(containerText);
        }

        return( <InputWrapper>
                <InputField 
                    {...props} 
                    placeholderTextColor={secondaryText} 
                    style={[{
                        backgroundColor: inputBackgroundColor}, 
                        style]}
                    onFocus={customOnFocus}
                    onBlur={customOnBlur}
                    secureTextInput={isPassword && hidePassword} />
                    {isPassword && (
                        <RightIcon
                            onPress={() => {setHidePassword(hidePassword)}}>
                            <MaterialCommunityIcons name={hidePassword ? "eye-off" : "eye"} size={30} color={secondaryText} />
                        </RightIcon> 
                    )}
              </InputWrapper>
        );   
    }

export default WalletPasswordTextInput;