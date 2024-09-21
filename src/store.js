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
            active: true,
            commandOne: 'npm install',
            commandTwo: 'claps.js',

        },
        {
            itemName: 'nuget',
            active: false,
            commandOne: 'npm get chicken',
            commandTwo: 'claps.js',

        },
        {
            itemName: 'spm',
            active: false,
            commandOne: 'npm install qualcosa',
            commandTwo: 'claps.js',

        },
        {
            itemName: 'github',
            active: false,
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


});