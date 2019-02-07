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
];
