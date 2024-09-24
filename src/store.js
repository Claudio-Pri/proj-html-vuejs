import { reactive } from 'vue';

export const store = reactive({

    headerLinks: [
        {
            link: 'home',
            href: '#',
            active: false
        },
        {
            link: 'landing',
            href: '#',
            active: true
        },
        {
            link: 'pages',
            href: '#',
            active: false
        },
        {
            link: 'docs',
            href: '#',
            active: false
        }
    ],
    headerBottomLinks: [
        {
            link: 'amazon',
            href: '#',
            img: '/img/amazon.svg'
        },
        {
            link: 'google',
            href: '#',
            img: '/img/google.svg'
        },
        {
            link: 'lenovo',
            href: '#',
            img: '/img/lenovo.svg'
        },
        {
            link: 'paypal',
            href: '#',
            img: '/img/paypal.svg'
        },
        {
            link: 'shopify',
            href: '#',
            img: '/img/shopify.svg'
        },
        {
            link: 'spotify',
            href: '#',
            img: '/img/spotify.svg'
        },
    ],
    quickStart: [
        {
            itemName: 'npm',
            // active: false,
            commandOne: 'npm install',
            commandTwo: 'claps.js',

        },
        {
            itemName: 'nuget',
            // active: false,
            commandOne: 'npm get chicken',
            commandTwo: 'claps.js',

        },
        {
            itemName: 'spm',
            // active: false,
            commandOne: 'npm install qualcosa',
            commandTwo: 'claps.js',

        },
        {
            itemName: 'github',
            // active: false,
            commandOne: '$ npm install qualcosa',
            commandTwo: 'claps.js',

        },
    ],
    ourRates: [
        {
            lable: 'Basic',
            price: '$9.00',
            description: 'All the basics for business that are just getting started.',
            included: [
                'Full access',
                'Enhanced Security',
                'Source Files',
                '1 Domain Free'

            ]
        },
        {
            lable: 'Business',
            price: '$39.00',
            description: 'Better for growing businesses that want more customers.',
            included: [
                'Full access',
                'Enhanced Security',
                'Source Files',
                '1 Domain Free'

            ]
        },
        {
            lable: 'Enterprise',
            price: '$79.00',
            description: 'Advanced features for pros whoneed more customization.',
            included: [
                'Full access',
                'Enhanced Security',
                'Source Files',
                '1 Domain Free'

            ]
        }
    ],
    userEmail: '',
    companyLinks: [
        {
            link: 'About us',
            href: '#',
        },
        {
            link: 'Services',
            href: '#',
        },
        {
            link: 'Team',
            href: '#',
        },
        {
            link: 'Pricing',
            href: '#',
        },
        {
            link: 'Project',
            href: '#',
        },
        {
            link: 'Careers',
            href: '#',
        },
        {
            link: 'Blog',
            href: '#',
        },
        {
            link: 'Login',
            href: '#',
        },
    ],
    usefullLinks: [
        {
            link: 'Terms of service',
            href: '#',
        },
        {
            link: 'Privacy Policy',
            href: '#',
        },
        {
            link: 'Documentation',
            href: '#',
        },
        {
            link: 'Changelog',
            href: '#',
        },
        {
            link: 'Components',
            href: '#',
        },

    ],
    paymentMethods: [
        {
            lable: 'american-express',
            url: '/img/american-ex.png'
        },
        {
            lable: 'discover',
            url: '/img/discover.png'
        },
        {
            lable: 'master-card',
            url: '/img/master-card.png'
        },
        {
            lable: 'pay-pal',
            url: '/img/paypal.png'
        },
        {
            lable: 'visa',
            url: '/img/visa.png'
        },
    ]

});