import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    const svgProps = {
      cx: 15,
      cy: 5,
      r: 3,
      stroke: 'green',
      strokeWidth: 3,

      // 👇the attribute casing works
      // "stroke-width": 3,
    };

    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10">
        <circle {...svgProps} />
      </svg>
    );
  }
}
