import { r as registerInstance, h } from './core-576488ff.js';

const PageProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "page-profile" }, h("h1", null, "Profile"), h("p", null, "Here you can find your profile")));
    }
    static get style() { return ".app-profile {\n  padding: 10px;\n}"; }
};

export { PageProfile as page_profile };
