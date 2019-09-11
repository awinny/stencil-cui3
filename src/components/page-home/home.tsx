import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'home.css',
  shadow: true
})
export class PageHome {

  render() {
    return (
      <div class="page-home">
        <h1>Home</h1>
        <p>
          Welcome to this demo app for Stencil using Corporate UI 3.*
        </p>
      </div>
    );
  }
}
