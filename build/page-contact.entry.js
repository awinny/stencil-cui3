import { r as registerInstance, h } from './core-d2c1f4f6.js';

const PageContact = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "page-contact" }, h("h1", null, "Contact"), h("p", null, "Here you can find ways of contacting us.")));
    }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
};

export { PageContact as page_contact };
