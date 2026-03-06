

## Codebase Architecture Audit Report

### Overall Assessment
The codebase is **well-structured** for a project of this scope. Separation of concerns is mostly clean, naming conventions are consistent, and the modular data layer is solid. Below are findings ordered from most critical to optional.

---

### 1. CRITICAL: ProductEditorPage is a Monolith (392 lines, 40+ useState calls)

`src/pages/ProductEditorPage.tsx` has ~40 individual `useState` calls and contains form state management, validation, database CRUD, and UI rendering all in one file. This is the single biggest maintainability risk.

**Recommendation**: Extract a `useProductEditor` custom hook that encapsulates all state, validation, `loadProduct`, `buildProduct`, `handleSave`, and `handleDelete` logic. The page component should only handle rendering.

---

### 2. HIGH: Placeholder Data in productionData.ts

`src/data/productionData.ts` contains multiple `{{REPLACE_WITH_ACTUAL}}` placeholder strings that render directly on the public site (blanching temperature, batch throughput, solar percentage). This is user-facing broken content.

**Recommendation**: Replace all placeholders with real values or remove those fields until real data is available.

---

### 3. HIGH: Admin Route Has No Authentication

`/admin/products` is publicly accessible with full CRUD access to the database. Anyone who discovers the URL can create, edit, or delete products.

**Recommendation**: Add authentication gate to the admin route. At minimum, a simple password check; ideally, proper auth via the backend.

---

### 4. MEDIUM: Inconsistent Import Paths for Product Type/Helpers

Some files import from `@/data/products` directly, others from `@/data/companyData` (which re-exports the same things). This creates confusion about the canonical import path.

- `ProductPageTemplate.tsx` imports from `@/data/products`
- `Footer.tsx` imports `getProductsByCategory` from `@/data/products` but other data from `@/data/companyData`
- `schema.ts` imports `Product` type from `@/data/companyData`

**Recommendation**: Pick one canonical path. Since `companyData.ts` is just a barrel re-export file, either commit to always importing through it, or remove the re-exports and import from source files directly. The barrel file adds indirection without value since there are only 4-5 source files.

---

### 5. MEDIUM: Product Test File is a No-Op

`src/data/products.test.ts` contains only a placeholder `expect(true).toBe(true)`. It provides zero test coverage.

**Recommendation**: Either write meaningful tests (e.g., test `mapRowToProduct` mapping, `getRelatedProducts` logic, product validation) or delete the file to avoid false confidence.

---

### 6. MEDIUM: WEB3FORMS_ACCESS_KEY Hardcoded in Constants

`src/lib/constants.ts` contains the Web3Forms API key as a plain string. While this key is client-side by nature, it's better practice to use an environment variable.

**Recommendation**: Move to `VITE_WEB3FORMS_KEY` environment variable for consistency and to keep secrets out of version control.

---

### 7. LOW: ErrorBoundary Exists But Is Never Used

`src/components/ErrorBoundary.tsx` is defined but never imported or wrapped around any component in the app.

**Recommendation**: Wrap `<App />` or at least the `<Routes>` in `ErrorBoundary` to catch runtime crashes gracefully.

---

### 8. LOW: Unused `Redirect` Component

`src/components/Redirect.tsx` exists but is not imported anywhere. React Router's `<Navigate>` is used directly instead.

**Recommendation**: Delete `Redirect.tsx` to reduce dead code.

---

### 9. LOW: `companyData.ts` Barrel File Adds Little Value

`src/data/companyData.ts` only re-exports from 4 other files. With modern IDE navigation, this indirection layer doesn't help much and creates the import ambiguity noted in point 4.

**Recommendation**: Consider removing it and importing directly from source files (`companyInfo.ts`, `faqData.ts`, etc.).

---

### 10. OPTIONAL: `socialIcons.ts` Could Be Inlined

`src/lib/socialIcons.ts` is a 9-line file mapping 4 icon names to Lucide components. It's only used in `Footer.tsx`.

**Recommendation**: Inline into `Footer.tsx` or keep as-is if you plan to use it elsewhere.

---

### Summary Priority List

| # | Priority | Issue | Effort |
|---|----------|-------|--------|
| 1 | Critical | Extract ProductEditor state into custom hook | Medium |
| 2 | High | Fix `{{REPLACE_WITH_ACTUAL}}` placeholders | Small |
| 3 | High | Add admin route authentication | Medium |
| 4 | Medium | Standardize import paths (remove barrel or commit to it) | Small |
| 5 | Medium | Write real tests or delete placeholder test | Small |
| 6 | Medium | Move API key to env variable | Small |
| 7 | Low | Wire up ErrorBoundary | Small |
| 8 | Low | Delete unused Redirect.tsx | Trivial |
| 9 | Low | Remove companyData.ts barrel file | Small |
| 10 | Optional | Inline socialIcons.ts | Trivial |

