const routes = 
[
    {
        name:  'dashboard',
        component: 'pages/dashboard.page',
        path: '/dashboard',
        auth: false,
        children:[
            {
                name:  'carousel',
                component: 'pages/carousel.page',
                path: '/dashboard/carousel',
                auth: false
            },
            {
                name:  'partners',
                component: 'pages/partners.page',
                path: '/dashboard/partners',
                auth: false
            },
            {
                name:  'speakers',
                component: 'pages/speakers.page',
                path: '/dashboard/speakers',
                auth: false
            },
            {
                name:  'aboutEvent',
                component: 'pages/aboutEvents.page',
                path: '/dashboard/aboutEvents',
                auth: false
            },
            {
                name:  'contact',
                component: 'pages/contact.page',
                path: '/dashboard/contact',
                auth: false
            },
            {
                name:  'settings',
                component: 'pages/settings.page',
                path: '/dashboard/settings',
                auth: false
            },
            {
                name:  'scientific',
                component: 'pages/scientific.page',
                path: '/dashboard/scientific',
                auth: false
            }
        ]
    }
];

export default routes;