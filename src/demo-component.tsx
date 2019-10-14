import { h, Component, Prop } from '@stencil/core';

@Component({
    shadow: false,
    tag: 'demo-component'
})
export class DemoComponent {
    @Prop() public readonly heading: string;

    protected render(): unknown {
        return (
            <div>
                <p><strong>Component no shadowdom</strong></p>
                <p>Attribute heading: {this.heading}</p>
                <slot></slot>
            </div>
        );
    }
}
