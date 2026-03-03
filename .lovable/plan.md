

## Integrate Web3Forms for Contact and Catalog Forms

Web3Forms access key (`cac19d89-6caa-40d7-b262-2f9ba0236a31`) is a publishable key, safe to store in the codebase.

### Changes

**`src/lib/constants.ts`** — Add `WEB3FORMS_ACCESS_KEY` constant.

**`src/components/forms/ContactForm.tsx`** — Replace the simulated `setTimeout` submission with a real `fetch` POST to `https://api.web3forms.com/submit`, sending `access_key`, `name`, `email`, `company`, `country`, `phone`, `product`, `quantity`, `message`, and a `subject` derived from the variant (e.g. "Quote Request from [name]"). Handle success/error from the API response.

**`src/components/forms/CatalogForm.tsx`** — Same pattern: replace simulated submission with a real Web3Forms POST, sending `access_key`, `name`, `email`, `company`, and `subject: "Catalog Download Request"`. Handle success/error.

Both forms keep their existing validation, loading states, and success screens — only the submission logic changes.

