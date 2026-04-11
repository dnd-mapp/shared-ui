import { AttributeInput } from '../attribute-input';

export const ButtonColors = {
    PRIMARY: 'primary',
    BASE: 'base',
    DANGER: 'danger',
} as const;

export type ButtonColor = (typeof ButtonColors)[keyof typeof ButtonColors];

export const DEFAULT_BUTTON_COLOR: ButtonColor = ButtonColors.BASE;

export function buttonColorAttribute(value: AttributeInput<ButtonColor>) {
    return Object.values(ButtonColors).find((color) => value === color) ?? DEFAULT_BUTTON_COLOR;
}
