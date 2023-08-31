import { MetagenDefaults } from './types.js';

const defaults_of_defaults: MetagenDefaults = {
    title: "Nitlix App",
    description: 'A new pre-packed nitlix app.',
    site_name: 'Nitlix',
    theme: {
        color: '#FFFFFF',
    },
    language: 'en_GB',
    images: [
        {
            url: "https://www.nitlix.pro/assets/img/embed/dark.webp",
            width: 1280,
            height: 720,
        }
    ],
    type: 'website',
    url: 'https://www.nitlix.pro',
    keywords: [],
    twitter: {
        creator: {
            id: "1334566862479380480",
            tag: "@nitlixis",
        },
        site: "1334566862479380480",
        card: "summary_large_image",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

export default defaults_of_defaults;