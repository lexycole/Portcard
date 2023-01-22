import { ReactNode} from "react";
import { GestureResponderEvent, StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";

export interface ButtonProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress: (event: GestureResponderEvent) => void | undefined;
}
