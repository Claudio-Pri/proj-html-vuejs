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
            href: '#'
        },
        {
            link: 'lenovo',
            href: '#'
        },
        {
            link: 'paypal',
            href: '#'
        },
        {
            link: 'shopify',
            href: '#'
        },
        {
            link: 'spotify',
            href: '#'
        },
    ]


});