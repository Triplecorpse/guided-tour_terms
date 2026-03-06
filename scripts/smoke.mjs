import { en, uk, getTerms, terms } from '../dist/index.js';

const checks = [
  ['en export non-empty', en.length > 0],
  ['uk export non-empty', uk.length > 0],
  ['terms.en equals en', terms.en === en],
  ['getTerms(en-US) resolves', getTerms('en-US') === en],
  ['getTerms(ua) resolves to uk', getTerms('ua') === uk],
];

const failed = checks.filter(([, ok]) => !ok);

if (failed.length > 0) {
  for (const [name] of failed) {
    console.error(`FAIL: ${name}`);
  }
  process.exit(1);
}

console.log('Smoke test passed.');

