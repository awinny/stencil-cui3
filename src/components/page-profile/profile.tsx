import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-profile',
  styleUrl: 'profile.css',
  shadow: true
})
export class PageProfile {

  render() {
    return (
      <div class="page-profile">
        <h1>Profile</h1>
        <p>
          Here you can find your profile
        </p>
      </div>
    );
  }
}
