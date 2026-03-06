import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', '..', 'uk.md');

let content = '';
try {
  content = fs.readFileSync(filePath, { encoding: 'utf8' });
} catch (err) {
  // eslint-disable-next-line no-console
  console.warn(`Warning: failed to read ${filePath}: ${err}`);
}

export const uk = content;
export default uk;
