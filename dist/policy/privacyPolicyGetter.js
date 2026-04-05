import * as fsp from "fs/promises";
const policy = {};
export async function getPrivacyPolicy(lang) {
    const targetLang = lang === 'uk' ? 'uk' : 'en';
    if (policy[targetLang] !== undefined) {
        return policy[targetLang];
    }
    try {
        const content = await fsp.readFile(new URL(`./${targetLang}.md`, import.meta.url), 'utf-8');
        policy[targetLang] = content;
        return content;
    }
    catch (error) {
        const isMissingFile = typeof error === 'object' &&
            error !== null &&
            'code' in error &&
            error.code === 'ENOENT';
        if (!isMissingFile || targetLang === 'en') {
            throw error;
        }
    }
    const fallback = await fsp.readFile(new URL(`./en.md`, import.meta.url), 'utf-8');
    policy[targetLang] = fallback;
    if (policy.en === undefined) {
        policy.en = fallback;
    }
    return fallback;
}
