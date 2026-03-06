# guided-tour_terms

TypeScript package that exports Terms and Conditions text from Markdown files.

## Install from git

```bash
npm install git+https://github.com/<owner>/<repo>.git
```

`prepare` runs automatically during git installation, so `dist` is built for consumers.

## Usage

```ts
import terms, { en, uk, getTerms } from 'guided-tour_terms';

console.log(en);          // raw content from en.md
console.log(uk);          // raw content from uk.md
console.log(terms.en);    // same as en
console.log(getTerms('uk'));   // ukrainian text
console.log(getTerms('en-US')); // english text
```

## Scripts

- `npm run build` - compile TypeScript to `dist`.
- `npm run test:smoke` - compile and run a minimal runtime check.

