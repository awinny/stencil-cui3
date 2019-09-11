const routes = [
    { url: '/', component: 'page-home', exact: true, data: { text: 'Home', type: 'primary' } },
    { url: '/contact', component: 'page-contact', data: { text: 'Contact', type: 'primary' } },
    { url: '/profile', component: 'page-profile', data: { text: 'Profile', type: 'secondary' } },
    { component: 'page-none' }
];

export { routes as r };
