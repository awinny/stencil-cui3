import { Component, h } from '@stencil/core';

import { routes } from '../../routes';

@Component({
  tag: 'primary-items',
  styleUrl: 'primary.css',
  shadow: false
})
export class PrimaryItems {

  componentDidRender() {
    window['CorporateUi'].baseComponents(['main-navigation']);
  }

  render() {
    return routes.filter(item => item.url && item.data.type === 'primary').map(item => (
      <nav-item>
        <stencil-route-link { ...item }>{item.data.text}</stencil-route-link>
      </nav-item>
    ));
  }
}
