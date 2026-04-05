import {Lang} from "../langs.js";
import * as fsp from "fs/promises"

const policy: Partial<Record<Lang, string>> = {};

export async function getPrivacyPolicy(lang: Lang): Promise<string> {
    const targetLang: Lang = lang === 'uk' ? 'uk' : 'en';

    if (policy[targetLang] !== undefined) {
        return policy[targetLang]!;
    }

    try {
        const content = await fsp.readFile(new URL(`./${targetLang}.md`, import.meta.url), 'utf-8');
        policy[targetLang] = content;
        return content;
    } catch (error: unknown) {
        const isMissingFile =
            typeof error === 'object' &&
            error !== null &&
            'code' in error &&
            (error as { code?: string }).code === 'ENOENT';

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
