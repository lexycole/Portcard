import { AntDesign } from "@expo/vector-icons";
import { ComponentProps, ReactNode} from "react";
import { TextInputProps } from "react-native";

interface ExtraInputProps {
    label: ReactNode;
    icon: ComponentProps<typeof AntDesign>['name'];
    isPassword?: Boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;