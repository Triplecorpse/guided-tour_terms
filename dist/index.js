// Central exports for terms
import enDefault from './terms/en.js';
import ukDefault from './terms/uk.js';
export const en = enDefault;
export const uk = ukDefault;
export const terms = {
    en,
    uk,
};
export function getTerms(lang) {
    if (!lang)
        return undefined;
    const l = lang.toLowerCase();
    if (l === 'en' || l.startsWith('en-'))
        return terms.en;
    if (l === 'uk' || l === 'ua' || l.startsWith('uk-') || l.startsWith('ua-'))
        return terms.uk;
    return undefined;
}
export default terms;
