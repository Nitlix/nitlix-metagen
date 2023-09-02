import { MetagenData, MetagenOverrides } from "./types"
import defaults from "./defaults"
import defaults_of_defaults from './defaults';
import constructor from "./constructor";

let currentDefaults: MetagenOverrides = defaults;

/**
 * @param {MetagenOverrides} overrides - Overrides for the default metagen data.
 * @returns {MetagenData} - The metagen data.
 * Returns a metaGen dictionary, to be used by Next.JS to generate meta tags.
 */
export function metaGen(overrides: MetagenOverrides={}): MetagenData{
    const data = {
        ...defaults_of_defaults,
        ...currentDefaults,
        ...overrides
    }

    return constructor(data);
}


export function setDefaults(newDefaults: MetagenOverrides): void{
    currentDefaults = newDefaults;
}