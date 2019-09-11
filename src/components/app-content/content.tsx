import { Component, h } from '@stencil/core';

import { routes } from '../../routes';

@Component({
  tag: 'app-content',
  styleUrl: 'content.css',
  shadow: false
})
export class AppContent {

  componentDidLoad() {
    window['CorporateUi'].baseComponents(['main-content']);
  }

  render() {
    return (
      <section class="light">
        <div class="container">
          <stencil-router root="/stencil-cui3/">
            <stencil-route-switch scrollTopOffset={0}>
              {routes.map(item => <stencil-route { ...item }></stencil-route>)}
            </stencil-route-switch>
          </stencil-router>
        </div>
      </section>
    );
  }
}
