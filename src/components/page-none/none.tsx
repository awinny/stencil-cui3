import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-none',
  styleUrl: 'none.css',
  shadow: true
})
export class PageNone {

  render() {
    return (
      <div class="page-none">
        <h1>Ops</h1>
        <p>
          Could not find the page your looking for
        </p>
      </div>
    );
  }
}
