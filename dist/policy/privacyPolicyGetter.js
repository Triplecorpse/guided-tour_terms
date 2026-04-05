import * as fsp from "fs/promises";
const policy = {};
export async function getPrivacyPolicy(lang) {
    if (policy[lang]) {
        return policy[lang];
    }
    const targetLang = 'en';
    const content = await fsp.readFile(new URL(`./${targetLang}.md`, import.meta.url), 'utf-8');
    policy[lang] = content;
    return content;
}
