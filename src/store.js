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
            img: '/public/img/amazon.svg'
        },
        {
            link: 'google',
            href: '#',
            img: '/public/img/google.svg'
        },
        {
            link: 'lenovo',
            href: '#',
            img: '/public/img/lenovo.svg'
        },
        {
            link: 'paypal',
            href: '#',
            img: '/public/img/paypal.svg'
        },
        {
            link: 'shopify',
            href: '#',
            img: '/public/img/shopify.svg'
        },
        {
            link: 'spotify',
            href: '#',
            img: '/public/img/spotify.svg'
        },
    ]


});