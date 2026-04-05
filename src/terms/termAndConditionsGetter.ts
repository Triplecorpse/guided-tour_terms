import {Lang} from "../langs.js";
import * as fsp from "fs/promises"

const terms: Partial<Record<Lang, string>> = {};

export async function getTermsAndConditions(lang: Lang): Promise<string> {
    // Normalize at runtime so JS callers cannot break key/path coercion.
    const targetLang: Lang = lang === 'uk' ? 'uk' : 'en';

    if (terms[targetLang] !== undefined) {
        return terms[targetLang]!;
    }

    try {
        const content = await fsp.readFile(new URL(`./${targetLang}.md`, import.meta.url), 'utf-8');
        terms[targetLang] = content;
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

    const fallback = await fsp.readFile(new URL(`../../en.md`, import.meta.url), 'utf-8');
    terms[targetLang] = fallback;
    if (terms.en === undefined) {
        terms.en = fallback;
    }

    return fallback;
}
