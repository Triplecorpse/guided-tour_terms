import { readFileSync } from 'node:fs';
export const en = readFileSync(new URL('../../en.md', import.meta.url), 'utf8');
export default en;
