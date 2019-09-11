import { Component, h } from '@stencil/core';

import { routes } from '../../routes';

@Component({
  tag: 'secondary-items',
  styleUrl: 'secondary.css',
  shadow: false
})
export class SecondaryItems {

  componentDidRender() {
    window['CorporateUi'].baseComponents(['main-navigation']);
  }

  render() {
    return routes.filter(item => item.url && item.data.type === 'secondary').map(item => (
      <nav-item>
        <stencil-route-link { ...item }>{item.data.text}</stencil-route-link>
      </nav-item>
    ));
  }
}
