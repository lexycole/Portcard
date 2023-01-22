import { MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import React, {FC, useState} from 'react'
import styled from 'styled-components/native';

import {colors} from "../colors/colors";
import SmallText from '../Texts/SmallText';
import { InputProps  } from "./types";

    const { secondaryText, primary, containerText, text } = colors;
    const InputWrapper = styled.View`
        width:100%`;

    const LeftIcon = styled.View`
        position: absolute;
        top: 45px;
        left: 15px;
        z-index: 1;
        border-right-width: 2px;
        border-color: #ffffff;
        color:#fff;
        padding-right:10px`;

    const InputField = styled.TextInput`
        background-color: ${containerText};
        height: 60px;
        border-width: 2px;
        border-radius: 10px;
        border-color: ${primary};
        margin-vertical: 3px;
        margin-bottom: 10px;
        padding:15px;
        padding-left: 65px;
        font-size: 16px;
        color: #ffffff;
    `;
    const RightIcon = styled.TouchableOpacity`
        position: absolute;
        top:40px;
        right: 15px;
        color: #fff;
        z-index: 1;`;


    const SignUpTextInput: FC<InputProps> = ({isPassword, style,icon,label, ...props}) => {
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
                <LeftIcon>
                <AntDesign name={icon} size={20} color={text} />
                    </LeftIcon>
                    <SmallText style={style}>{label}</SmallText>
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

export default SignUpTextInput;