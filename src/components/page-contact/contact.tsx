import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-contact',
  styleUrl: 'contact.css',
  shadow: true
})
export class PageContact {

  render() {
    return (
      <div class="page-contact">
        <h1>Contact</h1>
        <p>
          Here you can find ways of contacting us.
        </p>
      </div>
    );
  }
}
