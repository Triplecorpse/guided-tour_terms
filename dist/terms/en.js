import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', '..', 'en.md');
let content = '';
try {
    content = fs.readFileSync(filePath, { encoding: 'utf8' });
}
catch (err) {
    // If the file can't be read at import time, export an empty string and surface a console warning.
    // This keeps imports from crashing during static analysis or in environments where the file isn't present.
    // You can remove the try/catch if you prefer the import to throw on missing files.
    // eslint-disable-next-line no-console
    console.warn(`Warning: failed to read ${filePath}: ${err}`);
}
export const en = content;
export default en;
