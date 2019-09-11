import { r as registerInstance, h } from './core-576488ff.js';
import { r as routes } from './routes-f4219c6f.js';

const AppContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        window['CorporateUi'].baseComponents(['main-content']);
    }
    render() {
        return (h("section", { class: "light" }, h("div", { class: "container" }, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, routes.map(item => h("stencil-route", Object.assign({}, item))))))));
    }
    static get style() { return ""; }
};

export { AppContent as app_content };
