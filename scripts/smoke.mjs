import { getTermsAndConditions, getPrivacyPolicy } from '../dist/index.js';
import en from '../dist/terms/en.js';
import uk from '../dist/terms/uk.js';

const termsEn = await getTermsAndConditions('en');
const termsUk = await getTermsAndConditions('uk');
const policyEn = await getPrivacyPolicy('en');
const policyUk = await getPrivacyPolicy('uk');

const checks = [
  ['en subpath export non-empty', en.length > 0],
  ['uk subpath export non-empty', uk.length > 0],
  ['getTermsAndConditions(en) resolves', termsEn === en],
  ['getTermsAndConditions(uk) resolves', termsUk === uk],
  ['getPrivacyPolicy(en) resolves', policyEn.length > 0],
  ['getPrivacyPolicy(uk) falls back to en', policyUk === policyEn],
];

const failed = checks.filter(([, ok]) => !ok);

if (failed.length > 0) {
  for (const [name] of failed) {
    console.error(`FAIL: ${name}`);
  }
  process.exit(1);
}

console.log('Smoke test passed.');

