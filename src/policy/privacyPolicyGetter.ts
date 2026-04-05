import {Lang} from "../langs.js";
import * as fsp from "fs/promises"

const policy: Partial<Record<Lang, string>> = {};

export async function getPrivacyPolicy(lang: Lang): Promise<string> {
    if (policy[lang] !== undefined) {
        return policy[lang]!;
    }

    const targetLang = 'en';
    const content = await fsp.readFile(new URL(`./${targetLang}.md`, import.meta.url), 'utf-8');
    policy[lang] = content;

    return content;
}
