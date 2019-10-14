import { h, Component, Prop } from '@stencil/core';

@Component({
    shadow: true,
    tag: 'demo-component-shadow'
})
export class DemoComponentShadow {
    @Prop() public readonly heading: string;

    protected render(): unknown {
        return (
            <div>
                <p><strong>Component with shadowdom</strong></p>
                <p>Attribute heading: {this.heading}</p>
                <slot></slot>
            </div>
        );
    }
}
