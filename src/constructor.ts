import { MetagenData, MetagenOverrides } from "./types";

export default function constructor(data: MetagenOverrides): MetagenData {
    let constructor: any = {
        title: data.title,
        description: data.description,

        openGraph: {
            title: data.title,
            description: data.description,
        }
    }

    if (data.base){
        constructor.metadataBase = data.base;
    }


    (data.siteName && (constructor.openGraph.site_name = data.siteName));
    (data.locale && (constructor.openGraph.locale = data.locale));
    
    if (data.images){
        constructor.twitter = {
            images: data.images.map((image) => {
                if (image.twitter){
                    return image.url;
                }
            })
        }
        constructor.openGraph.images = data.images.map((imageData => {
            if (imageData.twitter){
                delete imageData.twitter;
            }
            return imageData;
        }))
    }

    (data.type && (constructor.openGraph.type = data.type));
    (data.url && (constructor.openGraph.url = data.url));
    (data.keywords && (constructor.openGraph.keywords = data.keywords));
    
    if (data.twitter){
        if (!constructor.twitter){
            constructor.twitter = {
                ...data.twitter
            };
        }
        else {
            constructor.twitter = {
                ...constructor.twitter,
                ...data.twitter
            }
        }
    }

    (data.robots && (constructor.robots = data.robots));
    return constructor;
}