type TwitterType = {
    creator?: {
        id: string,
        tag: string,
    },
    site?: string,
    card?: string,
}

export type MetagenOverrides = {
    base?: string,
    title?: string,
    description?: string,
    siteName?: string,
    locale?: string,
    images?: {
        url: string,
        width: number,
        height: number,
        twitter?: boolean,
    }[],
    type?: string,
    url?: string,
    keywords?: string[],    
    twitter?: TwitterType,
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
    metadataBase?: string,
    title: string,
    description: string,
    keywords?: string[],
    openGraph: {
        title?: string,
        description?: string,
        locale?: string,
        type?: string,
        images?: {
            url: string,
            width: number,
            height: number,
        }[],
        url?: string,
        site_name?: string,
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
    twitter?: {
        card?: any,
        title?: string,
        description?: string,
        siteId?: any,
        creatorId?: any,
        creator?: any,
        images?: string[],
    },
}
