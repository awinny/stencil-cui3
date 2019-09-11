import { r as registerInstance, h } from './core-576488ff.js';

const PageNone = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "page-none" }, h("h1", null, "Ops"), h("p", null, "Could not find the page your looking for")));
    }
    static get style() { return ""; }
};

export { PageNone as page_none };
