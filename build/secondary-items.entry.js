import { r as registerInstance, h } from './core-576488ff.js';
import { r as routes } from './routes-5519aa1a.js';

const SecondaryItems = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        window['CorporateUi'].baseComponents(['main-navigation']);
    }
    render() {
        return routes.filter(item => item.url && item.data.type === 'secondary').map(item => (h("nav-item", null, h("stencil-route-link", Object.assign({}, item), item.data.text))));
    }
    static get style() { return ""; }
};

export { SecondaryItems as secondary_items };
