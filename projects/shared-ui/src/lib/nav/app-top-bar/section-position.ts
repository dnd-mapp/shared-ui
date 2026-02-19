import { AttributeInput } from '../../attribute-input';

export const SectionPositions = {
    START: 'start',
    END: 'end',
} as const;

export type SectionPosition = (typeof SectionPositions)[keyof typeof SectionPositions];

export const DEFAULT_SECTION_POSITION: SectionPosition = SectionPositions.START;

export function sectionPositionAttribute(value: AttributeInput<SectionPosition>) {
    return Object.values(SectionPositions).find((position) => position === value) ?? DEFAULT_SECTION_POSITION;
}
