import { booleanAttribute, ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
    selector: 'dma-button',
    templateUrl: './button.component.html',
    styleUrl: './button.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
})
export class ButtonComponent {
    /** Is this the principal call to action on the page? */
    public readonly primary = input(false, { transform: booleanAttribute });

    /** What background color to use */
    public readonly backgroundColor = input<string>();

    /** How large should the button be? */
    public readonly size = input<'small' | 'medium' | 'large'>('medium');

    /**
     * Button contents
     *
     * @required
     */
    public readonly label = input<string>('Button');

    public readonly trigger = output<PointerEvent>();

    protected readonly classes = computed(() => {
        const mode = this.mode();
        const size = this.size();

        return `storybook-button storybook-button--${size} ${mode}`;
    });

    private readonly mode = computed(() =>
        this.primary() ? 'storybook-button--primary' : 'storybook-button--secondary',
    );
}
