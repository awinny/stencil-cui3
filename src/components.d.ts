/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppContent {}
  interface PageContact {}
  interface PageHome {}
  interface PageNone {}
  interface PageProfile {}
  interface PrimaryItems {}
  interface SecondaryItems {}
}

declare global {


  interface HTMLAppContentElement extends Components.AppContent, HTMLStencilElement {}
  var HTMLAppContentElement: {
    prototype: HTMLAppContentElement;
    new (): HTMLAppContentElement;
  };

  interface HTMLPageContactElement extends Components.PageContact, HTMLStencilElement {}
  var HTMLPageContactElement: {
    prototype: HTMLPageContactElement;
    new (): HTMLPageContactElement;
  };

  interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {}
  var HTMLPageHomeElement: {
    prototype: HTMLPageHomeElement;
    new (): HTMLPageHomeElement;
  };

  interface HTMLPageNoneElement extends Components.PageNone, HTMLStencilElement {}
  var HTMLPageNoneElement: {
    prototype: HTMLPageNoneElement;
    new (): HTMLPageNoneElement;
  };

  interface HTMLPageProfileElement extends Components.PageProfile, HTMLStencilElement {}
  var HTMLPageProfileElement: {
    prototype: HTMLPageProfileElement;
    new (): HTMLPageProfileElement;
  };

  interface HTMLPrimaryItemsElement extends Components.PrimaryItems, HTMLStencilElement {}
  var HTMLPrimaryItemsElement: {
    prototype: HTMLPrimaryItemsElement;
    new (): HTMLPrimaryItemsElement;
  };

  interface HTMLSecondaryItemsElement extends Components.SecondaryItems, HTMLStencilElement {}
  var HTMLSecondaryItemsElement: {
    prototype: HTMLSecondaryItemsElement;
    new (): HTMLSecondaryItemsElement;
  };
  interface HTMLElementTagNameMap {
    'app-content': HTMLAppContentElement;
    'page-contact': HTMLPageContactElement;
    'page-home': HTMLPageHomeElement;
    'page-none': HTMLPageNoneElement;
    'page-profile': HTMLPageProfileElement;
    'primary-items': HTMLPrimaryItemsElement;
    'secondary-items': HTMLSecondaryItemsElement;
  }
}

declare namespace LocalJSX {
  interface AppContent extends JSXBase.HTMLAttributes<HTMLAppContentElement> {}
  interface PageContact extends JSXBase.HTMLAttributes<HTMLPageContactElement> {}
  interface PageHome extends JSXBase.HTMLAttributes<HTMLPageHomeElement> {}
  interface PageNone extends JSXBase.HTMLAttributes<HTMLPageNoneElement> {}
  interface PageProfile extends JSXBase.HTMLAttributes<HTMLPageProfileElement> {}
  interface PrimaryItems extends JSXBase.HTMLAttributes<HTMLPrimaryItemsElement> {}
  interface SecondaryItems extends JSXBase.HTMLAttributes<HTMLSecondaryItemsElement> {}

  interface IntrinsicElements {
    'app-content': AppContent;
    'page-contact': PageContact;
    'page-home': PageHome;
    'page-none': PageNone;
    'page-profile': PageProfile;
    'primary-items': PrimaryItems;
    'secondary-items': SecondaryItems;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

