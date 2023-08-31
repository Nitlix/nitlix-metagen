import { MetagenData, MetagenDefaults, MetagenOverrides } from "./types"
import defaults from "./defaults"
let currentDefaults = defaults;

/**
 * @param {MetagenOverrides} overrides - Overrides for the default metagen data.
 * @returns {MetagenData} - The metagen data.
 * Returns a metaGen dictionary, to be used by Next.JS to generate meta tags.
 */
export function metaGen(overrides: MetagenOverrides={}): MetagenData{
    const data = {
        ...currentDefaults,
        ...overrides
    }

    if (!data.twitter.creator){
        data.twitter.creator = {
            id: "1334566862479380480",
            tag: "@nitlixis",
        }
    }


    return {
        title: data.title,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            locale: data.language,
            type: data.type,
            images: data.images,
            url: data.url,
            site_name: data.site_name,
        },
        themeColor: data.theme.color,
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
        },
        twitter: {
            card: data.twitter.card,
            title: data.title,
            description: data.description,
            siteId: data.twitter.site,
            creator: data.twitter.creator.tag,
            creatorId: data.twitter.creator.id,
            images: data.images.map((image) => {
                return image.url
            }),
        }
    }
}

export function setDefaults(newDefaults: MetagenDefaults): void{
    currentDefaults = newDefaults;
}