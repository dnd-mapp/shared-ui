import { ConnectedPosition } from '@angular/cdk/overlay';

export const DEFAULT_DROPDOWN_POSITIONS: ConnectedPosition[] = [
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: 4,
    },
    {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom',
        offsetY: -4,
    },
];
