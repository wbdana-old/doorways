export const MENU_OPTIONS = [
    {
        title: 'Projects',
        subs: [
            {
                callback: () => window.open('https://asteroids-online.herokuapp.com/', '_blank'),
                title: 'Asteroids Online',
                url: 'https://asteroids-online.herokuapp.com/',
                application: false,
            },
            {
                callback: () => window.open('https://conntext.herokuapp.com/', '_blank'),
                title: 'Connected Text',
                url: 'https://conntext.herokuapp.com/',
                application: false,
            },
            {
                callback: () => window.open('https://pypi.org/project/opengraphio/', '_blank'),
                title: 'OpenGraph.io Python Client',
                url: 'https://pypi.org/project/opengraphio/',
                application: false,
            },
            {
                callback: () => window.open('https://rubygems.org/gems/opengraph-io/', '_blank'),
                title: 'OpenGraph.io Ruby Client',
                url: 'https://rubygems.org/gems/opengraph-io/',
                application: false,
            },
            {
                callback: () => window.open('https://qsmart-react.herokuapp.com/', '_blank'),
                title: 'QSmart',
                url: 'https://qsmart-react.herokuapp.com/',
                application: false,
            },
            {
                callback: () => window.open('https://pixel-playground.herokuapp.com/', '_blank'),
                title: 'Pixel Playground',
                url: 'https://pixel-playground.herokuapp.com/',
                application: false,
            },
        ],
    },
    {
        title: 'Applications',
        subs: [
            {
                title: 'Terminal',
                application: true,
            },
        ],
    },
    {
        title: 'Profile',
        subs: [
            {
                title: 'GitHub',
                callback: () => window.open('https://github.com/wbdana/', '_blank'),
                url: 'https://github.com/wbdana/',
                application: false,
            },
            {
                title: 'LinkedIn',
                callback: () => window.open('https://linkedin.com/in/wbdana/', '_blank'),
                url: 'https://linkedin.com/in/wbdana/',
                application: false,
            },
            {
                title: 'Twitter',
                callback: () => window.open('https://twitter.com/_wbdana', '_blank'),
                url: 'https://twitter.com/_wbdana',
                application: false,
            },
        ],
    }
];
