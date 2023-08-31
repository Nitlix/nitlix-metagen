export type MetagenDefaults = {
    title: string,
    description: string,
    site_name: string,
    theme: {
        color: string
    },
    language: string,
    images: {
        url: string,
        width: number,
        height: number,
    }[],
    type: string,
    url: string,
    keywords: string[],
    twitter: {
        creator: {
            id: string,
            tag: string,
        },
        site: string,
        card: string,
    },
    robots: {
        index: boolean,
        follow: boolean,
        nocache: boolean,
        googleBot: {
            index: boolean,
            follow: boolean,
            noimageindex: boolean,
            'max-video-preview': number,
            'max-image-preview': string,
            'max-snippet': number,
        },
    },
}

export type MetagenOverrides = {
    title?: string,
    description?: string,
    site_name?: string,
    theme?: {
        color?: string
    },
    language?: string,
    images?: {
        url: string,
        width: number,
        height: number,
    }[],
    type?: string,
    url?: string,
    keywords?: string[],    
    twitter?: {
        creator?: {
            id: string,
            tag: string,
        },
        site?: string,
        card?: string,
    },
    robots?: {
        index?: boolean,
        follow?: boolean,
        nocache?: boolean,
        googleBot?: {
            index?: boolean,
            follow?: boolean,
            noimageindex?: boolean,
            'max-video-preview'?: number,
            'max-image-preview'?: string,
            'max-snippet'?: number,
        },
    },
}

export type MetagenData = {
    title: string,
    description: string,
    openGraph: {
        title: string,
        description: string,
        locale: string,
        type: string,
        images: {
            url: string,
            width: number,
            height: number,
        }[],
        url: string,
        site_name: string,
    },
    themeColor: any,
    robots: {
        index: boolean,
        follow: boolean,
        nocache: boolean,
        googleBot: {
            index: boolean,
            follow: boolean,
            noimageindex: boolean,
            'max-video-preview': number,
            'max-image-preview': string,
            'max-snippet': number,
        },
    },
    twitter: {
        card: any,
        title: string,
        description: string,
        siteId: any,
        creatorId: any,
        creator: any,
        images: string[],
    },
}
