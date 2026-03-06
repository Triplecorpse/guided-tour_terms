import { readFileSync } from 'node:fs';
export const uk = readFileSync(new URL('../../uk.md', import.meta.url), 'utf8');
export default uk;
