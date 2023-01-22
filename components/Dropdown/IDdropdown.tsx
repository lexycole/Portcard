import type { DropdownOption } from '@niku/react-native-dropdown-select';

export const options: DropdownOption[] = [
    {
        label: "Choose Identity Type",
        value: "____________________",
    },
    {
        label: "Driver's License",
        value: "license"
    },
    {
        label: "National Identity Card",
        value: "ID Image"
    },
    {
        label: "Passport",
        value: "passport"
    },
]
export const defaultValue = '____________________';