export const MENU_OPTIONS = [
    {
        title: 'Projects',
        subs: [
            {
                callback: () => window.open('https://asteroids-online.herokuapp.com/', '_blank', 'noopener noreferrer'),
                title: 'Asteroids Online',
                url: 'https://asteroids-online.herokuapp.com/',
            },
            {
                callback: () => window.open('https://conntext.herokuapp.com/', '_blank', 'noopener noreferrer'),
                title: 'Connected Text',
                url: 'https://conntext.herokuapp.com/',
            },
            {
                callback: () => window.open('https://pypi.org/project/opengraphio/', '_blank', 'noopener noreferrer'),
                title: 'OpenGraph.io Python Client',
                url: 'https://pypi.org/project/opengraphio/',
            },
            {
                callback: () => window.open('https://rubygems.org/gems/opengraph-io/', '_blank', 'noopener noreferrer'),
                title: 'OpenGraph.io Ruby Client',
                url: 'https://rubygems.org/gems/opengraph-io/',
            },
            {
                callback: () => window.open('https://qsmart-react.herokuapp.com/', '_blank', 'noopener noreferrer'),
                title: 'QSmart',
                url: 'https://qsmart-react.herokuapp.com/',
            },
            {
                callback: () => window.open('https://pixel-playground.herokuapp.com/', '_blank', 'noopener noreferrer'),
                title: 'Pixel Playground',
                url: 'https://pixel-playground.herokuapp.com/',
            },
        ],
    },
    {
        title: 'Applications',
        subs: [
            {
                title: 'Terminal',
            },
        ],
    },
    {
        title: 'Profile',
        subs: [
            {
                title: 'GitHub',
                callback: () => window.open('https://github.com/wbdana/', '_blank', 'noopener noreferrer'),
            },
            {
                title: 'LinkedIn',
                callback: () => window.open('https://linkedin.com/in/wbdana/', '_blank', 'noopener noreferrer'),
            },
            {
                title: 'Twitter',
                callback: () => window.open('https://twitter.com/_wbdana', '_blank', 'noopener noreferrer'),
            },
        ]
    }
];
