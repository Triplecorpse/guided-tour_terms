import {Lang} from "../langs.js";
import * as fsp from "fs/promises"

const terms: Partial<Record<Lang, string>> = {};

export async function getTermsAndConditions(lang: Lang): Promise<string> {
    if (terms[lang] !== undefined) {
        return terms[lang]!;
    }

    const content = await fsp.readFile(new URL(`../../${lang}.md`, import.meta.url), 'utf-8');
    terms[lang] = content;

    return content;
}
